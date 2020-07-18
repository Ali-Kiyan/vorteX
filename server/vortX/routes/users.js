var express = require('express');
var router = express.Router();
const readFile = require('../handlers/boat-ramps-reader');


/* GET users listing. */
router.get('/', function(req, res, next) {

readFile()
    .then(data => {
      res.send(data["features"]);
    })
    .catch(err => {
        console.log(err);
    });

});

module.exports = router;
