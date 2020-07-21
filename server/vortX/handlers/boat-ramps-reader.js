const fs = require('fs');
const path = require('path')
const boat_ramps_path = path.join(__dirname, '../data/boat_ramps.geojson')
const readFile = () => new Promise((resolve, reject) => {
        fs.readFile(boat_ramps_path, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(JSON.parse(data));
        });
    });

module.exports = readFile
