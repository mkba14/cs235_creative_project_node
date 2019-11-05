var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dnd', function(req, res, next){
  // req comes from browser.
  console.log("In DND route");
  
  // q = ... if we had used something else, it would have changed?
  console.log(req.query.q);
  var dndRest = "https://api.open5e.com/" + req.query.q + "/?format=json"
  //"https://api.open5e.com/monsters/?format=json"
  console.log(dndRest);
  request(dndRest).pipe(res); 
});

router.get('/dnd/monsters', function(req, res, next){
  // req comes from browser.
  console.log("In DND route");
  
  // q = ... if we had used something else, it would have changed?
  console.log(req.query.q);
  var dndRest = "https://api.open5e.com/monsters/?"+req.query.q+"&format=json"
  //"https://api.open5e.com/monsters/?format=json"
  console.log(dndRest);
  request(dndRest).pipe(res); 
});

module.exports = router;
