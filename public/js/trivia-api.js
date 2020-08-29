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
    $('#btnA').text(response.results[0].incorrect_answers[0]);
    $('#btnB').text(response.results[0].incorrect_answers[1]);
    $('#btnC').text(response.results[0].correct_answer);
    $('#btnD').text(response.results[0].incorrect_answers[2]);

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
    $('#btnE').text(response.results[0].correct_answer);
    $('#btnF').text(response.results[0].incorrect_answers[0]);
    $('#btnG').text(response.results[0].incorrect_answers[1]);
    $('#btnH').text(response.results[0].incorrect_answers[2]);
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
    $('#btnI').text(response.results[0].incorrect_answers[0]);
    $('#btnJ').text(response.results[0].incorrect_answers[1]);
    $('#btnK').text(response.results[0].correct_answer);
    $('#btnL').text(response.results[0].incorrect_answers[2]);
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
    $('#btnM').text(response.results[0].incorrect_answers[0]);
    $('#btnN').text(response.results[0].incorrect_answers[1]);
    $('#btnO').text(response.results[0].incorrect_answers[2]);
    $('#btnP').text(response.results[0].correct_answer);
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
    $('#btnQ').text(response.results[0].incorrect_answers[0]);
    $('#btnR').text(response.results[0].correct_answer);
    $('#btnS').text(response.results[0].incorrect_answers[1]);
    $('#btnT').text(response.results[0].incorrect_answers[2]);
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
    $('#btnU').text(response.results[0].incorrect_answers[0]);
    $('#btnV').text(response.results[0].incorrect_answers[1]);
    $('#btnW').text(response.results[0].incorrect_answers[2]);
    $('#btnX').text(response.results[0].correct_answer);
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
    $('#btnY').text(response.results[0].incorrect_answers[0]);
    $('#btnZ').text(response.results[0].incorrect_answers[1]);
    $('#btnAA').text(response.results[0].correct_answer);
    $('#btnBB').text(response.results[0].incorrect_answers[2]);
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
    $('#btnCC').text(response.results[0].correct_answer);
    $('#btnDD').text(response.results[0].incorrect_answers[0]);
    $('#btnEE').text(response.results[0].incorrect_answers[1]);
    $('#btnFF').text(response.results[0].incorrect_answers[2]);
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
    $('#btnGG').text(response.results[0].incorrect_answers[0]);
    $('#btnHH').text(response.results[0].incorrect_answers[1]);
    $('#btnII').text(response.results[0].incorrect_answers[2]);
    $('#btnJJ').text(response.results[0].correct_answer);
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
    $('#btnKK').text(response.results[0].incorrect_answers[0]);
    $('#btnLL').text(response.results[0].correct_answer);
    $('#btnMM').text(response.results[0].incorrect_answers[1]);
    $('#btnNN').text(response.results[0].incorrect_answers[2]);
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
    $('#btnOO').text(response.results[0].incorrect_answers[0]);
    $('#btnPP').text(response.results[0].incorrect_answers[1]);
    $('#btnQQ').text(response.results[0].incorrect_answers[2]);
    $('#btnRR').text(response.results[0].correct_answer);
    

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
    $('#btnSS').text(response.results[0].correct_answer);
    $('#btnTT').text(response.results[0].incorrect_answers[0]);
    $('#btnUU').text(response.results[0].incorrect_answers[1]);
    $('#btnVV').text(response.results[0].incorrect_answers[2]);
    let score = 0;
    let answer= response.results[0].correct_answer;

    // when you click on the face card 2 you will get the point value
    // can you add another on click to the answer button with a data attribute
    //  of correct or incorect
    $(".btn").on("click", (e) => {
  
  let value = e.target.getAttribute("data-value");
   console.log(value);

   if (answer.correct === answer)
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

});

   
  });
});

// // scoring
//  let score = 0;
//  let answer= correct_answer;

// // when you click on the face card 2 you will get the point value
// // can you add another on click to the answer button with a data attribute
// //  of correct or incorect
// $(".btn").on("click", (e) => {
  
//   let value = e.target.getAttribute("data-value");
//    console.log(value);

//    if (answer.correct === answer)
//   {
//     //score = score + value;
//     score++;
//     alert("Correct");
//     document.getElementById("score") = score + value;
// }
// else
// {   
//     //score = score - value;
//     score--;
//     alert("Incorrect");
//     document.getElementById("score") = score - value;
    
// }

// });
