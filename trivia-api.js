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

    $('#question').text(response.trivia_categories[26].name)
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

    $('#category3').text(response.trivia_categories[27].name)
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

    $('#question').text(response.results[0].question)
  })
})
$("#box2").on("click", function(event) {
  event.preventDefault();
  let sports = 'https://opentdb.com/api.php?amount=20&category=11';
    $.ajax({
      url: sports,
      method: "GET"
  }).then(function(response) {
      console.log(response);
    $('#question').text(response.results[1].question);
    
  

  })
      
})
