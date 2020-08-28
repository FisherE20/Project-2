$("#cat1").on("click", function(event) {
  event.preventDefault();
  let cat_1 = 'https://opentdb.com/api_category.php';
    $.ajax({
      url: cat_1,
      method: "GET"
    }).then(function(response) {
      console.log(response);

    $('#category1').text(response.trivia_categories[2].name)
  })
})
$("#cat2").on("click", function(event) {
  event.preventDefault();
  let cat_2 = 'https://opentdb.com/api_category.php';
    $.ajax({
      url: cat_2,
      method: "GET"
    }).then(function(response) {
      console.log(response);

    $('#category2').text(response.trivia_categories[16].name)
  })
})
$("#cat3").on("click", function(event) {
  event.preventDefault();
  let cat_3 = 'https://opentdb.com/api_category.php';
    $.ajax({
      url: cat_3,
      method: "GET"
    }).then(function(response) {
      console.log(response);

    $('#category3').text(response.trivia_categories[17].name)
  })
})
$("#cat4").on("click", function(event) {
  event.preventDefault();
  let cat_4 = 'https://opentdb.com/api_category.php';
    $.ajax({
      url: cat_4,
      method: "GET"
    }).then(function(response) {
      console.log(response);

    $('#category4').text(response.trivia_categories[18].name)
  })
})



$("#box1").on("click", function(event) {
  event.preventDefault();
  let film = 'https://opentdb.com/api.php?amount=20&category=11&type=multiple';
    $.ajax({
      url: film,
      method: "GET"
    }).then(function(response) {
      console.log(response);

    $('#question').text(response.results[0].question);
    $('#btn1').text(response.results[0].incorrect_answers[0]);
    $('#btn2').text(response.results[0].incorrect_answers[1]);
    $('#btn3').text(response.results[0].correct_answer);
    $('#btn4').text(response.results[0].incorrect_answers[2]);
    correct: "3";
  })
    
})
$("#box2").on("click", function(event) {
  event.preventDefault();
  let film = 'https://opentdb.com/api.php?amount=20&category=16&type=multiple';
    $.ajax({
      url: film,
      method: "GET"
  }).then(function(response) {
      console.log(response);
    $('#question2').text(response.results[0].question);
    $('#btn1').text(response.results[0].correct_answer);
    $('#btn2').text(response.results[0].incorrect_answers[0]);
    $('#btn3').text(response.results[0].incorrect_answers[1]);
    $('#btn4').text(response.results[0].incorrect_answers[2]);
    correct: "1";
  })
})
$("#box3").on("click", function(event) {
  event.preventDefault();
  let celebrities = 'https://opentdb.com/api.php?amount=20&category=26&type=multiple';
  $.ajax({
    url: celebrities,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $('#question3').text(response.results[0].question);
    $('#btn1').text(response.results[0].incorrect_answers[0]);
    $('#btn2').text(response.results[0].incorrect_answers[1]);
    $('#btn3').text(response.results[0].correct_answer);
    $('#btn4').text(response.results[0].incorrect_answers[2]);
    correct: "3";
  })
})
$("#box4").on("click", function(event) {
  event.preventDefault();
  let animals = 'https://opentdb.com/api.php?amount=20&category=27&type=multiple';
  $.ajax({
    url: animals,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $('#question4').text(response.results[0].question);
    $('#btn1').text(response.results[0].incorrect_answers[0]);
    $('#btn2').text(response.results[0].incorrect_answers[1]);
    $('#btn3').text(response.results[0].incorrect_answers[2]);
    $('#btn4').text(response.results[0].correct_answer);
    correct: "4";
  })
})

$("#box5").on("click", function(event) {
  event.preventDefault();
  let film = 'https://opentdb.com/api.php?amount=20&category=11&type=multiple';
  $.ajax({
    url: film,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $('#question5').text(response.results[1].question);
    $('#btn1').text(response.results[0].incorrect_answers[0]);
    $('#btn2').text(response.results[0].correct_answer);
    $('#btn3').text(response.results[0].incorrect_answers[1]);
    $('#btn4').text(response.results[0].incorrect_answers[2]);
    correct: "2";
  })
})
$("#box6").on("click", function(event) {
  event.preventDefault();
  let celebrities = 'https://opentdb.com/api.php?amount=20&category=16&type=multiple';
    $.ajax({
      url: celebrities,
      method: "GET"
  }).then(function(response) {
      console.log(response);
    $('#question6').text(response.results[1].question);
    $('#btn1').text(response.results[0].incorrect_answers[0]);
    $('#btn2').text(response.results[0].incorrect_answers[1]);
    $('#btn3').text(response.results[0].incorrect_answers[2]);
    $('#btn4').text(response.results[0].correct_answer);
    correct: "4";
  })
})

$("#box7").on("click", function(event) {
  event.preventDefault();
  let celebrities = 'https://opentdb.com/api.php?amount=20&category=26&type=multiple';
   $.ajax({
    url: celebrities,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    $('#question7').text(response.results[0].question);
    $('#btn1').text(response.results[0].incorrect_answers[0]);
    $('#btn2').text(response.results[0].incorrect_answers[1]);
    $('#btn3').text(response.results[0].correct_answer);
    $('#btn4').text(response.results[0].incorrect_answers[2]);
    correct: "3";
  })
})
$("#box8").on("click", function(event) {
  event.preventDefault();
let animals = 'https://opentdb.com/api.php?amount=20&category=27&type=multiple';
  $.ajax({
    url: animals,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $('#question8').text(response.results[0].question);
    $('#btn1').text(response.results[0].correct_answer);
    $('#btn2').text(response.results[0].incorrect_answers[0]);
    $('#btn3').text(response.results[0].incorrect_answers[1]);
    $('#btn4').text(response.results[0].incorrect_answers[2]);
    correct: "1";
  })
})

$("#box9").on("click", function(event) {
  event.preventDefault();
  let film = 'https://opentdb.com/api.php?amount=20&category=11&type=multiple';
  $.ajax({
    url: film,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $('#question9').text(response.results[3].question);
    $('#btn1').text(response.results[0].incorrect_answers[0]);
    $('#btn2').text(response.results[0].incorrect_answers[1]);
    $('#btn3').text(response.results[0].incorrect_answers[2]);
    $('#btn4').text(response.results[0].correct_answer);
    correct: "4";
  })
})
$("#box10").on("click", function(event) {
  event.preventDefault();
  let film = 'https://opentdb.com/api.php?amount=20&category=16&type=multiple';
    $.ajax({
      url: film,
      method: "GET"
  }).then(function(response) {
      console.log(response);
    $('#question10').text(response.results[2].question);
    $('#btn1').text(response.results[0].incorrect_answers[0]);
    $('#btn2').text(response.results[0].correct_answer);
    $('#btn3').text(response.results[0].incorrect_answers[1]);
    $('#btn4').text(response.results[0].incorrect_answers[2]);
    correct: "2";
  })
})

$("#box11").on("click", function(event) {
  event.preventDefault();
  let celebrities ='https://opentdb.com/api.php?amount=20&category=26&type=multiple';
  $.ajax({
    url: celebrities,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#question11").text(response.results[3].question);
    $('#btn1').text(response.results[0].incorrect_answers[0]);
    $('#btn2').text(response.results[0].incorrect_answers[1]);
    $('#btn3').text(response.results[0].incorrect_answers[2]);
    $('#btn4').text(response.results[0].correct_answer);
    correct: "4";
  })
})

$("#box12").on("click", function(event) {
  event.preventDefault();
  let animals = 'https://opentdb.com/api.php?amount=20&category=27&type=multiple';
  $.ajax({
    url: animals,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $('#question12').text(response.results[3].question);
    $('#btn1').text(response.results[0].correct_answer);
    $('#btn2').text(response.results[0].incorrect_answers[0]);
    $('#btn3').text(response.results[0].incorrect_answers[1]);
    $('#btn4').text(response.results[0].incorrect_answers[2]);
    correct: "1";
    
  })
})



// function categoryOne () {
//   let cat_1 = 'https://opentdb.com/api_category.php';
  
//   $.ajax({
//     url: cat_1,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response)
//     console.log("this is the right log")
  
//   });

// }

// categoryOne ();

// scoring during the game
let score = 0; 

// check for correct answer
let btn1 = 1;
let btn2 = 2;
let btn3 = 3;
let btn4 = 4; 

// when you click on the face card 2 you will get the point value
// can you add another on click to the answer button with a data attribute
//  of correct or incorect
$(".question").on("click", (e) => {
  
  let value = e.target.getAttribute("data-value");
   console.log(value);
  

});

$(".answer").on("click", (e) => {
  let answer = e.target.getAttribute("data-value");
  console.log(answer);
  if (answer.corret === answer)
  {
    //score = score + value;
    score++;
    alert("Correct");
    document.getElementById("score") = score + value;
}
else
{   
    //score = score - value;
    score--;
    alert("Incorrect");
    document.getElementById("score") = score - value;
}

  let newScore = score + value;
    // console.log(newScore);
    
    $("#score-card").text(newScore); 
})
// final score 

// function addScore() {
// take players score and add it to the 
// database and highscore HTML




// Timer Function

