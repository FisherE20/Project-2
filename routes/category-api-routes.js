


// you want to define these router on a Router,
// then export and attacxh to your 
// main app in server.js.

// express router. it's middleware/mini-app
app.get('/api/categories', function(req,res){
    categories.findAll().then((categories) => {
        res.json(categories);
    });
});

app.get('/api/questions', function(req,res){
    questions.findAll().then((questions) => {
        res.json(questions);
    });
});

app.get('/api/categories/:id', function(req,res){
    let id = req.params.id;

    categories.findByPk(id).then((category) => {
        res.json(category);
    });
});

app.get('/api/questions/:id', function(req,res){
    let id = req.params.id;

    questions.findAll().then((question) => {
        res.json(question);
    });
});