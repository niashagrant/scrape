//SCRAPE
$("#scrape-btn").on("click", function () {
  $.ajax({
    method: "GET",
    url: "/scrape",
  }).done(function (data) {
    console.log(data);
    window.location = "/";
  });
});

$(document).on("click", ".saveArticle", function () {
  console.log("clicked");

  var divs = document.querySelectorAll(".saveArticle"),
    i;
  for (i = 0; i < divs.length / 3; ++i) {
    var title = $(".title").data("title");
    var link = $(".link").data("link");
    var image = $(".image").data("image");
    var saveArticle = {
      title: title,
      link: link,
      image: image,
    };

    console.log(saveArticle);
    console.log("========");
  }

  var title = $(".title").data("title");
  var link = $(".link").data("link");
  var image = $(".image").data("image");

  var saveArticle = {
    title: title,
    link: link,
    image: image,
  };

  console.log(saveArticle);
  console.log("========");

  $.ajax({
    method: "POST",
    url: "/saved/",
    data: saveArticle,
  })
    .then(function (data) {
      console.log(data);
    })
    .fail(function (err) {
      console.log("-----");
      console.log(err);
    });

  //   $.post("/saved", saveArticle, function (data) {
  //     console.log("saved", data);
  //   });
});
