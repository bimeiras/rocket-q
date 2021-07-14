const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// EJS:
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

// Consts:
const rooms = [];
const questions = [];

//Mongoose

mongoose.connect("mongodb://localhost:27017/roomDB", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});

// Schemas
const roomSchema = {
    roomId: String,
    password: String
};

const Room = mongoose.model("Room", roomSchema);

const questionSchema = {
    content: String,
};

const Question = mongoose.model("Question", questionSchema);

// Routes
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

.post(function(req, res) {
    
    const room = new Room ({
        roomId: Math.floor((Math.random()*1000000)),
        password: req.body.password
    });

    room.save();
    rooms.push(room);

    res.redirect("/room/" + room.roomId);  
    
    
});

app.route("/room/:roomId")

.get(function(req, res) {
    const requestedRoom = req.params.roomId;

    res.render("room", {questions:questions, roomId: requestedRoom});    
})

.post(function(req, res) {
    const requestedRoom = req.params.roomId;
    
    const question = new Question ({
        content: req.body.question
    });

    question.save();

    questions.push(question.content);

    res.redirect("/room/" + requestedRoom);

});




//Server
app.listen(3000, function () {
    console.log("Server started on Port 3000")
});


