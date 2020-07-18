var fs = require('fs'),
    JSONStream = require('JSONStream');

var stream = fs.createReadStream('boat_ramps.geojson', {encoding: 'utf8'}),
    parser = JSONStream.parse('features.*');

stream.pipe(parser);

const getData = () => new Promise((resolve, reject) => {
        parser.on('data', function (result) {
            resolve(result)
        });
      });

module.exports = getData();