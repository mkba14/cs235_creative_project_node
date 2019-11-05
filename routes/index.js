var express = require('express');
var request = require('request');

var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cards/new', function(req, res, next) {
  console.log("retrieving new deck");
  var data = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  request(data).pipe(res);
});

router.get('/cards', function(req, res, next) {
  console.log("new deck retrieved", req.query.q);
  var data = "https://deckofcardsapi.com/api/deck/" + req.query.q + "/draw/?count=1";
  console.log(data);
  request(data).pipe(res);

});

router.get('/dnd', function(req, res, next) {
  // req comes from browser.
  console.log("In DND route");

  // q = ... if we had used something else, it would have changed?
  console.log(req.query.q);

  var dndRest = "https://api.open5e.com/" + req.query.q + "/?format=json"
  //var dndRest = "http://dnd5eapi.co/api/" + req.query.q;
  //"https://api.open5e.com/monsters/?format=json"
  console.log(dndRest);
  request(dndRest).pipe(res);
});

router.get('/dnd/monsters', function(req, res, next) {
  // req comes from browser.
  console.log("In DND route");

  // q = ... if we had used something else, it would have changed?
  console.log(req.query.q);
  //var dndRest = "http://dnd5eapi.co/api/monsters"
  var dndRest = "https://api.open5e.com/monsters/?" + req.query.q + "&format=json"
  //"https://api.open5e.com/monsters/?format=json"
  console.log(dndRest);
  request(dndRest).pipe(res);
});

module.exports = router;
