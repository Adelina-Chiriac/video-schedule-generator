const express = require("express");
const app = express();

const port = 3000;
const host = "localhost";

const bodyParser = require('body-parser');
app.use(bodyParser.json() );   
app.use(bodyParser.urlencoded({   
  extended: true
})); 

app.use(express.json()); 
app.use(express.urlencoded());

app.use(express.static('public'))
app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/create/new", (req, res) => {
    const days = req.body.days;
    console.log(days);
    res.render("new", {
        days: days
    });
});

app.listen(port, host, () => {
    console.log("Listening...");
});