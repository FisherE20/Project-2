$("#card").on("hover", function(event) {
  event.preventDefault();
  let random = 'https://opentdb.com/api.php?amount=20&category=11&type=multiple';
    $.ajax({
      url: random,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    $('#category').text(response.trivia_categories[0].name)
    $('#question').text(response.results[0].question);
    $('#answer').text(response.results[0].incorrect_answers[0]);
    $('#answer').text(response.results[0].incorrect_answers[1]);
    $('#answer').text(response.results[0].correct_answer);
    $('#answer').text(response.results[0].incorrect_answers[2]);
    
  })
})

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
let seconds = 120;

function startTimer() {
  timer = setInterval(function () {
    seconds--;
    document.getElementById("seconds").innerText = seconds % 60;
    document.getElementById("minutes").innerText = parseInt(seconds / 60);
    if (seconds == 0 - 1) {
      alert("Time Ran Out");
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

startTimer();