const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// EJS:
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));


const questions = [];
const rooms = [];

//Mongoose

mongoose.connect("mongodb://localhost:27017/roomDB", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});

const roomSchema = {
    roomId: String,
    password: String
};

const Room = mongoose.model("Room", roomSchema);


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

.post(function(req, res) { // TO-DO: GERAR UM roomID E ARMAZENAR A password NA BASE DE DADOS
    
    const room = new Room ({
        roomId: Math.floor((Math.random()*1000000)),
        password: req.body.password
    });

    room.save();
    rooms.push(room);

    res.redirect("/room/" + room.roomId);  
    
    
});

app.route("/room/:roomId") // TO-DO: ESPECIFICAR A roomId NA ROTA DO ROOM

.get(function(req, res) {
    const requestedRoom = req.params.roomId;

    res.render("room", {questions:questions, roomId: requestedRoom});    
    
});

/* .post(function(req, res) {
    const question = req.body.question;
    questions.push(question);

    res.redirect("/room");
}); */












//Server
app.listen(3000, function () {
    console.log("Server started on Port 3000")
});


