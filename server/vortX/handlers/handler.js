const readFile = require('./boat-ramps-reader');

readFile()
    .then(data => {
        console.log(data["features"])
    })
    .catch(err => {
        console.log(err);
    });