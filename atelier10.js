


var http = require('http');
var express = require('express');

var app = express();
app.set('view engine', 'ejs');

var server = app.listen(8080);  
var io = require('socket.io')(server);

app.get('/',function(req,res){   
    res.status(200).render('./pages/accueil');
});
app.get('/contact',function(req,res,next){
    res.status(200).render('./pages/contact');
});
app.get('/recherche/:annee/:mois',function(req,res,next){
    res.status(200).render('./pages/recherches', {annee: req.params.annee, mois: req.params.mois});
});
app.use(function(req,res,next){
    res.status(404).end('ERREUR 404!');   
});

var noClient = 1;
// Quand un client se connecte, on le note dans la console
var now 	= new Date();
var annee   = now.getFullYear();
var mois    = now.getMonth() + 1;
var jour    = now.getDate();
var heure   = now.getHours();
var minute  = now.getMinutes();
var seconde = now.getSeconds();

var dateServeur = "Le serveur a été lancé le " + jour + "/" + mois + "/" + annee + " à " + heure + ":" + minute + ":" + seconde;

io.sockets.on('connection', function (socket) {
    
    var now 	= new Date();
    var annee   = now.getFullYear();
    var mois    = now.getMonth() + 1;
    var jour    = now.getDate();
    var heure   = now.getHours();
    var minute  = now.getMinutes();
    var seconde = now.getSeconds();
    var dateRefresh = "Une nouvelle demande a été faite le " + jour + "/" + mois + "/" + annee + " à " + heure + ":" + minute + ":" + seconde;

    socket.emit('message1', 'Vous êtes le ' + noClient + "e client") ;
    socket.emit('message2', dateServeur);
    socket.emit('message3', dateRefresh);
    console.log('Un client est connecté !');
    noClient++;
});
console.log("Le serveur est lancé sur le port 8080");
