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

$(document).on("click", ".saveNote", function () {
  var text = $("textarea#message-text").val();
  // console.log(text);
  $.ajax({
    method: "POST",
    url: "/articles/" + text,
    data: {
      // Value taken from note textarea
      body: $(".bodyinput").val(),
    },
  }).then(function (data) {
    // Log the response
    console.log(data.value);
    // Empty the notes section
    $("#notes").empty();
  });
  $(".bodyinput").val("");
});

$(document).on("click", ".viewNotes", function () {
  $(this).parent().parent().parent().find(".showNotes").toggle();
});

$(document).on("click", ".deleteArticle", function () {
  var articleID = $(this).attr("data-articleID");
  console.log(articleID);
  $.ajax({
    method: "DELETE",
    url: "/deleteArticle/" + articleID,
  }).done(function (data) {
    console.log(data);
    window.location = "/saved";
  });
});

$(document).on("click", ".viewNotes", function () {
  console.log("view your notes");
  $("#notes").empty();
  var notes = $("textarea#message-text").val();
  console.log(notes);

  $.ajax({
    method: "GET",
    url: "/articles/" + notes,
  })
    // With that done, add the note information to the page
    .then(function (data) {
      console.log(data);

      // If there's a note in the article
      if (data.note) {
        // Place the body of the note in the body textarea
        $(".bodyinput").val(data.note.body);
      }
    });
});

// var articleID = $(this)
//   .parent()
//   .parent()
//   .siblings(".media")
//   .find(".deleteArticle")
//   .attr("data-articleID");
// console.log(articleID);
