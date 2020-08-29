
$("#cat1").on("mouseover", function(event) {
  event.preventDefault();
  let sports = 'https://opentdb.com/api_category.php';
    $.ajax({
      url: sports,
      method: "GET"
    }).then(function(response) {
      console.log(response);

    $('#category1').text(response.trivia_categories[12].name)
  })
});
$("#cat2").on("mouseover", function(event) {
  event.preventDefault();
  let celebrities = 'https://opentdb.com/api_category.php';
    $.ajax({
      url: celebrities,
      method: "GET"
    }).then(function(response) {
      console.log(response);

    $('#category2').text(response.trivia_categories[17].name)
  })
});

$("#cat3").on("mouseover", function(event) {
  event.preventDefault();
  let scienceNature = 'https://opentdb.com/api_category.php';
    $.ajax({
      url: scienceNature,
      method: "GET"
    }).then(function(response) {
      console.log(response);

    $('#category3').text(response.trivia_categories[8].name)
  })
});

$("#cat4").on("mouseover", function(event) {
  event.preventDefault();
  let mythology = 'https://opentdb.com/api_category.php';
    $.ajax({
      url: mythology,
      method: "GET"
    }).then(function(response) {
      console.log(response);

    $('#category4').text(response.trivia_categories[11].name)
  })
});


$("#box1").on("mouseover",function(event) {
  event.preventDefault();
  let sports = 'https://opentdb.com/api.php?amount=20&category=21&type=multiple';
    $.ajax({
      url: sports,
      method: "GET"
    }).then(function(response) {
      console.log(response);

    $('#question').text(response.results[0].question);
    $('#divA').text(response.results[0].incorrect_answers[0]);
    $('#divB').text(response.results[0].incorrect_answers[1]);
    $('#divC').text(response.results[0].correct_answer);
    $('#divD').text(response.results[0].incorrect_answers[2]);

    choice();


  })

    
});

$("#box2").on("mouseover", function(event) {
  event.preventDefault();
  let film = 'https://opentdb.com/api.php?amount=20&category=21&type=multiple';
    $.ajax({
      url: film,
      method: "GET"
  }).then(function(response) {
      console.log(response);
    $('#question2').text(response.results[0].question);
    $('#divA').text(response.results[0].correct_answer);
    $('#divB').text(response.results[0].incorrect_answers[0]);
    $('#divC').text(response.results[0].incorrect_answers[1]);
    $('#divD').text(response.results[0].incorrect_answers[2]);

    choice();

  })
});

$("#box3").on("mouseover", function(event) {
  event.preventDefault();
  let celebrities = 'https://opentdb.com/api.php?amount=20&category=21&type=multiple';
  $.ajax({
    url: celebrities,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $('#question3').text(response.results[0].question);
    $('#divA').text(response.results[0].incorrect_answers[0]);
    $('#divB').text(response.results[0].incorrect_answers[1]);
    $('#divC').text(response.results[0].correct_answer);
    $('#divD').text(response.results[0].incorrect_answers[2]);

    choice();

  })
});

$("#box4").on("mouseover", function(event) {
  event.preventDefault();
  let animals = 'https://opentdb.com/api.php?amount=20&category=26&type=multiple';
  $.ajax({
    url: animals,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $('#question4').text(response.results[0].question);
    $('#divA').text(response.results[0].incorrect_answers[0]);
    $('#divB').text(response.results[0].incorrect_answers[1]);
    $('#divC').text(response.results[0].incorrect_answers[2]);
    $('#divD').text(response.results[0].correct_answer);

    choice();

  })
});

$("#box5").on("mouseover", function(event) {
  event.preventDefault();
  let film = 'https://opentdb.com/api.php?amount=20&category=26&type=multiple';
  $.ajax({
    url: film,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $('#question5').text(response.results[1].question);
    $('#divA').text(response.results[0].incorrect_answers[0]);
    $('#divB').text(response.results[0].correct_answer);
    $('#divC').text(response.results[0].incorrect_answers[1]);
    $('#divD').text(response.results[0].incorrect_answers[2]);

    choice();

  })
});

$("#box6").on("mouseover", function(event) {
  event.preventDefault();
  let celebrities = 'https://opentdb.com/api.php?amount=20&category=26&type=multiple';
    $.ajax({
      url: celebrities,
      method: "GET"
  }).then(function(response) {
      console.log(response);
    $('#question6').text(response.results[1].question);
    $('#divA').text(response.results[0].incorrect_answers[0]);
    $('#divB').text(response.results[0].incorrect_answers[1]);
    $('#divC').text(response.results[0].incorrect_answers[2]);
    $('#divD').text(response.results[0].correct_answer);

    choice();
  })
});



$("#box7").on("mouseover", function(event) {
  event.preventDefault();
  let celebrities = 'https://opentdb.com/api.php?amount=20&category=17&type=multiple';
   $.ajax({
    url: celebrities,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    $('#question7').text(response.results[0].question);
    $('#divA').text(response.results[0].incorrect_answers[0]);
    $('#divB').text(response.results[0].incorrect_answers[1]);
    $('#divC').text(response.results[0].correct_answer);
    $('#divD').text(response.results[0].incorrect_answers[2]);

    choice();

  })
});

$("#box8").on("mouseover", function(event) {
  event.preventDefault();
let animals = 'https://opentdb.com/api.php?amount=20&category=17&type=multiple';
  $.ajax({
    url: animals,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $('#question8').text(response.results[0].question);
    $('#divA').text(response.results[0].correct_answer);
    $('#divB').text(response.results[0].incorrect_answers[0]);
    $('#divC').text(response.results[0].incorrect_answers[1]);
    $('#divD').text(response.results[0].incorrect_answers[2]);

    choice();

  })
});

$("#box9").on("mouseover", function(event) {
  event.preventDefault();
  let film = 'https://opentdb.com/api.php?amount=20&category=17&type=multiple';
  $.ajax({
    url: film,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $('#question9').text(response.results[3].question);
    $('#divA').text(response.results[0].incorrect_answers[0]);
    $('#divB').text(response.results[0].incorrect_answers[1]);
    $('#divC').text(response.results[0].incorrect_answers[2]);
    $('#divD').text(response.results[0].correct_answer);

    choice();

  })
});

$("#box10").on("mouseover", function(event) {
  event.preventDefault();
  let film = 'https://opentdb.com/api.php?amount=20&category=20&type=multiple';
    $.ajax({
      url: film,
      method: "GET"
  }).then(function(response) {
      console.log(response);
    $('#question10').text(response.results[2].question);
    $('#divA').text(response.results[0].incorrect_answers[0]);
    $('#divB').text(response.results[0].correct_answer);
    $('#divC').text(response.results[0].incorrect_answers[1]);
    $('#divD').text(response.results[0].incorrect_answers[2]);

    choice();

  })
 });

$("#box11").on("mouseover", function(event) {
  event.preventDefault();
  let celebrities ='https://opentdb.com/api.php?amount=20&category=20&type=multiple';
  $.ajax({
    url: celebrities,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#question11").text(response.results[3].question);
    $('#divA').text(response.results[0].incorrect_answers[0]);
    $('#divB').text(response.results[0].incorrect_answers[1]);
    $('#divC').text(response.results[0].incorrect_answers[2]);
    $('#divD').text(response.results[0].correct_answer);

    choice();

  })
});

$("#box12").on("mouseover", function(event) {
  event.preventDefault();
  let animals = 'https://opentdb.com/api.php?amount=20&category=20&type=multiple';
  $.ajax({
    url: animals,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    $('#question12').text(response.results[3].question);
    $('#divA').text(response.results[0].correct_answer);
    $('#divB').text(response.results[0].incorrect_answers[0]);
    $('#divC').text(response.results[0].incorrect_answers[1]);
    $('#divD').text(response.results[0].incorrect_answers[2]);

    choice();
  });
});

// GLOBAL SCORE
let score = 500;

$("#score").text(score)

function choice () {
  
  $(".correct").on('click', (event) =>{

    event.stopPropagation();
    alert("correct")
    
    score++
    $("#score").text(score)
  })
  
  $(".incorrect").on("click", (event) =>{

    event.stopPropagation();
    alert("Incorrect")
    score--
    
    $("#score").text(score)
  })
}
