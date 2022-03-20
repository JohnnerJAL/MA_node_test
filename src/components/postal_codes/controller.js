const fs = require('fs');
const readline = require('readline');
const axios = require('axios');

const store = require('./store');

const API_URI_POSCODES = 'https://api.postcodes.io/postcodes';

async function saveCoordinates(path) {
    return new Promise((resolve, reject) => {
        if (!path) {
            reject('There\'s no right file to process');
        }

        const coordinatesToSearch = [];
        const coordinates = [];

        const rl = readline.createInterface({
            input: fs.createReadStream(path, 'utf-8'),
            crlfDelay: Infinity
        });

        rl.on('line', async (line) => {
            coordinatesToSearch.push(line.split(','));
        });

        console.log(coordinates)
        rl.on('close', async () => {
            for (let i = 0, j = coordinatesToSearch.length; i < j; i++) {
                const [latitude, longitude] = coordinatesToSearch[i];
                
                if (latitude && longitude &&
                    typeof latitude === 'string' &&
                    typeof longitude === 'string') {
                        
                        console.log(latitude, longitude)
                        
                    const { data: externalData } = await axios.get(`${API_URI_POSCODES}?lon=${longitude}&lat=${latitude}`);
                    const data = await store.saveCoordinates(externalData.result, Number(longitude), Number(latitude));
                    coordinates.push(data);
                }
            }

            resolve(coordinates);
        });
    })
}

module.exports = {
    saveCoordinates,
};