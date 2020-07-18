var express = require('express');
var router = express.Router();
const readFile = require('../handlers/boat-ramps-reader');
const {ramps_per_construction, ramps_per_size_category, boat_ramps} = require('../handlers/handler.js')

// TODO:  error handlidng for routers and promises

/* GET ramps listing. */
router.get('/', function(req, res, next) {

readFile()
    .then(data => {
      res.send(data["features"]);
    })
    .catch(err => {
        console.log(err);
    });

});

  /* GET boat ramps listing */
router.get('/boat_ramps/coordinates', function(req, res, next) {
  boat_ramps().then((data)=>res.send(data))
});

  /* GET ramps per construction. */
router.get('/constructions', function(req, res, next) {
    ramps_per_construction().then((data)=>res.send(data))
  });

  /* GET ramps per size */
router.get('/size', function(req, res, next) {
    ramps_per_size_category().then((data)=>res.send(data))
  });

module.exports = router;
