var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var routes = require("./controllers/burgers_controller.js");

var PORT = process.env.PORT || 3000;

var app = express();


app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(methodOverride("_method"));

app.use("/", routes);


app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.listen(PORT, function (req, res) {
    console.log('App listening on PORT: ' + PORT);
});