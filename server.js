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

// // // Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/scrapedb", { useNewUrlParser: true });

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

// Main route, render index.handlebars
app.get("/", function (req, res) {
  res.render("index");
});

app.listen(PORT, function () {
  console.log("App running on port 3000!");
});
