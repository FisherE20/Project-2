// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    app.get("/", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.render("home")
    });

    app.get("/login", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.render("login", );
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members", (req, res) => {

        // this render is just a place holder to test the trivia handlebars page.
        res.render("members");
    });

    // Start Trivia Game
    app.get("/trivia", (req, res) => {

        if (!req.user) {
            res.redirect("/login");
        }

        res.render("trivia")

    })

    // Highcore Html Route
    app.get("/highscore", (req, res) => {

        if (!req.user) {
            res.redirect("/login");
        }
        res.render("highscore", { style: "styleForm.css" })
    })

    app.get("/how", (req, res) => {
        res.render("howto")
    })


};