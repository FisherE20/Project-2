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

    choice(response);


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

    choice(response);

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

    choice(response);

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

    choice(response);

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

    choice(response);

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

    choice(response);

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

    choice(response);

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

    choice(response);

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

    choice(response);

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

    choice(response);

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

    choice(response);

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

    choice(response);

  });
});

// GLOBAL SCORE
let score = 0;

function choice (response) {
  let answer= response.results[0].correct_answer;
  console.log(answer)
  
  $(".btnA").on("click", (e) => {



    let choices = $(".choices").text()

    // let rightChoice = choices.match(answer)
    // console.log(rightChoice)
    // let thisOne = rightChoice
    // console.log(thisOne + "this is the new one ")
    let value = e.target.getAttribute("data-value");
      console.log(value);
    
    if (choices != answer)

    let value = e.target.getAttribute("data-value");
      console.log(value);

    let choices =[
     response.results[0].correct_answer,
     response.results[0].incorrect_answers[0],
     response.results[0].incorrect_answers[1],
     response.results[0].incorrect_answers[2]
     ]

     console.log(choices)

     for(let i = 0; i < choices.length; i++){
       
      console.log(choices[i])

      if (choices[i] == answer)

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

      console.log(score);

    })
}
