const express = require("express");
const app = express();

const port = 3000;
const host = "localhost";

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.listen(port, host, () => {
    console.log("Listening...");
});