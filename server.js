var mongoose = require("mongoose");
var cheerio = require("cheerio");
var axios = require("axios");
var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static("public"));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = require("./models");
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/articledb";

mongoose.connect(MONGODB_URI);

// Main route, render index.handlebars
app.get("/", function (req, res) {
  var articleArray = [];
  axios.get("https://politics.theonion.com/").then(function (response) {
    var $ = cheerio.load(response.data);
    // console.log(response.data);
    console.log("unicorn");
    var object = {};

    $("article.cw4lnv-0").each(function (i, element) {
      var object = {};

      object.title = $(this).find("h2.sc-759qgu-0").text();

      //   console.log(object.title);

      object.link = $(this).find("figure.sc-1xh12qx-0").find("a").attr("href");

      object.image = $(this).find("img").attr("srcset");

      //   console.log(object.summary);
      //   console.log(object);
      articleArray.push(object);
    });
    console.log(articleArray);
    res.render("index", { article: articleArray });
  });
});

app.get("/saved", function (req, res) {
  res.render("saved");
});

// app.get("/scrape", function (req, res) {
//   axios.get("https://politics.theonion.com/").then(function (response) {
//     var $ = cheerio.load(response.data);
//     // console.log(response.data);
//     console.log("unicorn");
//     var object = {};

//     $("article.cw4lnv-0").each(function (i, element) {
//       var object = {};

//       object.title = $(this).find("h2.sc-759qgu-0").text();

//       //   console.log(object.title);

//       object.link = $(this).find("a.sc-1out364-0").attr("href");

//       object.image = $(this).find("img").attr("src");

//       //   console.log(object.summary);
//       console.log(object);
//     });
//   });

// });

app.listen(PORT, function () {
  console.log("App running on http://localhost:" + PORT);
});
