const fs = require('fs');
const readline = require('readline');

const store = require('./store');

async function saveCoordinates(path) {
    return new Promise((resolve, reject) => {
        if (!path) {
            reject('There\'s no right file to process');
        }

        const coordinates = [];

        const rl = readline.createInterface({
            input: fs.createReadStream(path, 'utf-8'),
            crlfDelay: Infinity
        });

        rl.on('line', async (line) => {
            const [latitude, longitude] = line.split(',');

            if (latitude && longitude &&
                typeof latitude === 'string' &&
                typeof longitude === 'string') {
                const data = await store.saveCoordinates(Number(longitude), Number(latitude));
                coordinates.push(data);
            }
        });

        rl.on('close', () => {
            // console.log(coordinates);
            resolve(coordinates);
        });
    })
}

module.exports = {
    saveCoordinates,
};