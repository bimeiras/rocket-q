const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const questions = [];

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.route("/")

.get(function(req, res) {
    res.render("home");
})

.post(function(req, res) { // TO-DO: REDIRECIONAR PARA A SALA ESPECIFICADA NO INPUT (roomID)
    console.log(req.body.roomId);
});

app.route("/create-room")

.get(function(req, res) {
    res.render("create-room");
})

.post(function(req, res) { // TO-DO: GERAR UM roomID E ARMAZENAR A password NA BASE DE DADOS
    console.log(req.body.password);
    res.redirect("/room");
});

app.route("/room") // TO-DO: ESPECIFICAR A roomId NA ROTA DO ROOM

.get(function(req, res) {
    res.render("room", {questions:questions});
})

.post(function(req, res) {
    const question = req.body.question;
    questions.push(question);

    res.redirect("/room");
});













app.listen(3000, function () {
    console.log("Server started on Port 3000")
});


