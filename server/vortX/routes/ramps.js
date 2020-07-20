var express = require('express');
var router = express.Router();
const readFile = require('../handlers/boat-ramps-reader');
const {ramps_per_material, ramps_per_size_category, boat_ramps} = require('../handlers/handler.js')

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
router.get('/coordinates', function(req, res, next) {
  boat_ramps().then((data)=>res.send(data))
});

  /* GET ramps per material. */
router.get('/materials', function(req, res, next) {
    ramps_per_material().then((data)=>res.send(data))
  });

  /* GET ramps per size */
router.get('/sizes', function(req, res, next) {
    ramps_per_size_category().then((data)=>res.send(data))
  });

module.exports = router;
