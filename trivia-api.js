// Start and Next buttons
const start = document.getElementById("start_game");
const next = document.getElementById("next");
const restart = document.getElementById("restart");

// Answer Grid
let answerGrid = document.querySelector(".answer-grid");

let box1 = document.querySelector("#box_1");
let box2 = document.querySelector("#box_2");
let box3 = document.querySelector("#box_3");
let box4 = document.querySelector("#box_4");
let box5 = document.querySelector("#box_5");
let box6 = document.querySelector("#box_6");
let box7 = document.querySelector("#box_7");
let box8 = document.querySelector("#box_8");
let box9 = document.querySelector("#box_9");
let box10 = document.querySelector("#box_10");
let box11 = document.querySelector("#box_11");
let box12 = document.querySelector("#box_12");

$(".start").on("click", function() {
  // Here we are building the URL we need to query the database
  const queryURL = "https://opentdb.com/api.php?amount=50";

  // Here we run our AJAX call to the OpenTrvia API
  $.ajax({
    url: queryURL,
    method: "GET",
  })

    // We store all of the retrieved data inside of an object called response
    .then(function(response) {
      // log the queryURL
      console.log(queryURL);
      // log the resulting object
      console.log(response);
      console.log(category);
    });

  //push the questions into availableQuestions Array

  // transfer content into html'
  $("#cat1").html("<h2>" + response.results.category + "</h2>");
  $(".question").text("<h3>" + response.results.question + "</h3>");

  // nextButton.addEventListener("click", next);
});

// Session Token
// ("https://opentdb.com/api.php?amount=50&token=YOURTOKENHERE")

// Retrieve a Session Token
// ("https://opentdb.com/api_token.php?command=request")

// Reset a Session Token
// ("https://opentdb.com/api_token.php?command=reset&token=YOURTOKENHERE")
