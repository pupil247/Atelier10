


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
// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');
});
console.log("Le serveur est lancé sur le port 8080");
