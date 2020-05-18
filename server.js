// dont forget to deploy this to heroku/github //
const express = require("express");
const bodyParser = require("body-parser");
const expressHandlebars = require("express-handlebars");

const app = express();

const PORT = process.env.PORT; 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.engine("handlebars", expressHandlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("server file: http://localhost:" + PORT);
    
});


