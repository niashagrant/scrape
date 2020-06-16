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

  var title = $(this).parent().parent().find(".title").text();

  var link = $(this).parent().parent().find(".link").attr("href");
  var image = $(this).parent().parent().find(".image").attr("src");

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
});

$(document).on("click", ".seeNotes", function () {
  $(this).parent().parent().parent().find(".hiddenNotes").toggle();
});

$(document).on("click", ".deleteArticle", function () {
  var articleID = $(this).data("articleID");
  console.log(articleID);
  $.ajax({
    method: "DELETE",
    url: "/deleteArticle/" + articleID,
  }).done(function (data) {
    console.log(data);
    window.location = "/saved";
  });
});
