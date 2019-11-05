var express = require('express');
var request = require('request');

var router = express.Router();
var port = 4210;
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cards/new', function(req, res, next) {
  console.log("retrieving new deck");
  var data = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  request(data).pipe(res);
});

router.get('/cards/draw', function(req, res, next) {
  console.log("new deck retrieved", req.query.num);
  var data = "https://deckofcardsapi.com/api/deck/" + req.query.id + "/draw/?count=" + req.query.num;
  console.log(data);
  request(data).pipe(res);
});

router.get('/cards/shuffle', function(req, res, next){
   var data = "https://deckofcardsapi.com/api/deck/" + req.query.id + "/shuffle/";
   request(data).pipe(res);
});

module.exports = router;
