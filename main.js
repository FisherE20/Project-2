
$('#btn').on('click',(event) => {

    event.preventDefault();

    let generalEducation = 'https://opentdb.com/api.php?amount=40&category=9&type=multiple';

    $.ajax({
        url: generalEducation,
        method: "GET"
    }).then(function(response){

        console.log(response)

        $('#question').text(response.results[0].question)
    })
})

$('#btn2').on('click',(event) => {

    event.preventDefault();

    let scienceAndnature = 'https://opentdb.com/api.php?amount=40&category=17&type=multiple';

    $.ajax({
        url: scienceAndnature,
        method: "GET"
    }).then(function(response){

        console.log(response)

        $('#question').text(response.results[0].question)
    })
})

$('#btn3').on('click',(event) => {

    event.preventDefault();

    let history = 'https://opentdb.com/api.php?amount=40&category=23';

    $.ajax({
        url: history,
        method: "GET"
    }).then(function(response){

        console.log(response)

        $('#question').text(response.results[0].question)
    })
})

$('#btn4').on('click',(event) => {

    event.preventDefault();

    let animals = 'https://opentdb.com/api.php?amount=40&category=27';

    $.ajax({
        url: animals,
        method: "GET"
    }).then(function(response){

        console.log(response)

        $('#question').text(response.results[0].question)
    })
})