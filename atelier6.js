


var http = require('http');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

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
app.listen(8080);
console.log("Le serveur est lancé sur le port 8080");
