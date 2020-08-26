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
  let film = 'https://opentdb.com/api.php?amount=20&category=11';
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

  })
    
})
$("#box2").on("click", function(event) {
  event.preventDefault();
  let film = 'https://opentdb.com/api.php?amount=20&category=16';
    $.ajax({
      url: film,
      method: "GET"
  }).then(function(response) {
      console.log(response);
    $('#question2').text(response.results[0].question);
  })
})
$("#box3").on("click", function(event) {
  event.preventDefault();
  let celebrities = 'https://opentdb.com/api.php?amount=20&category=26';
  $.ajax({
    url: celebrities,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  $('#question3').text(response.results[0].question)
  })
})
$("#box4").on("click", function(event) {
  event.preventDefault();
  let animals = 'https://opentdb.com/api.php?amount=20&category=27';
  $.ajax({
    url: animals,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  $('#question4').text(response.results[0].question)
  })
})

$("#box5").on("click", function(event) {
  event.preventDefault();
  let film = 'https://opentdb.com/api.php?amount=20&category=11';
  $.ajax({
    url: film,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  $('#question5').text(response.results[1].question)
  })
})
$("#box6").on("click", function(event) {
  event.preventDefault();
  let celebrities = 'https://opentdb.com/api.php?amount=20&category=16';
    $.ajax({
      url: celebrities,
      method: "GET"
  }).then(function(response) {
      console.log(response);
    $('#question6').text(response.results[1].question);
  })
})

$("#box7").on("click", function(event) {
  event.preventDefault();
  let celebrities = 'https://opentdb.com/api.php?amount=20&category=26';
   $.ajax({
    url: celebrities,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    $('#question7').text(response.results[0].question)
  })
})
$("#box8").on("click", function(event) {
  event.preventDefault();
let animals = 'https://opentdb.com/api.php?amount=20&category=27';
  $.ajax({
    url: animals,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  $('#question8').text(response.results[0].question)
  })
})

$("#box9").on("click", function(event) {
  event.preventDefault();
  let film = 'https://opentdb.com/api.php?amount=20&category=11';
  $.ajax({
    url: film,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  $('#question9').text(response.results[3].question)
  })
})
$("#box10").on("click", function(event) {
  event.preventDefault();
  let film = 'https://opentdb.com/api.php?amount=20&category=16';
    $.ajax({
      url: film,
      method: "GET"
  }).then(function(response) {
      console.log(response);
    $('#question10').text(response.results[2].question);
  })
})

$("#box11").on("click", function(event) {
  event.preventDefault();
  let celebrities ='https://opentdb.com/api.php?amount=50&category=26';
  $.ajax({
    url: celebrities,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  $("#question11").text(response.results[3].question)
  })
})

$("#box12").on("click", function(event) {
  event.preventDefault();
  let animals = 'https://opentdb.com/api.php?amount=20&category=27';
  $.ajax({
    url: animals,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  $('#question12').text(response.results[3].question)
  })
})

// scoring during the game
let score = 300; 

$(".answer").on("click", (e) => {
  
  let value = e.target.getAttribute("data-value");
  // console.log(value);
  // if correct_answer is selected increase score by the value
  
  // // else decrease the score by the value

  // // let new score increase or deacrease by the value
  let newScore = score + value;
  // console.log(newScore);
  $("#score-card").text(newScore); 
});


// final score 

// function addScore() {
// take players score and add it to the 
// database and highscore HTML




// Timer Function

let seconds = 60;

function startTimer() {
  timer = setInterval(function () {
    seconds--;
    document.getElementById("seconds").innerText = seconds % 60;
    document.getElementById("minutes").innerText = parseInt(seconds / 60);
    if (seconds == 0 - 1) {
      alert("Time Ran Out");
      stopTimer();
      console.log(timer);
    $("#timer").text(timer);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}
