const PostalCode = require('./model');

async function saveCoordinates(externalData, ...coordinates) {
    try {
        const newPostalCode = await new PostalCode({
            location: {
                coordinates,
            },
            postalCode: externalData,
            date: new Date(),
        });
    
        await newPostalCode.save();
    
        return newPostalCode;
    } catch (error) {
        return error;
    }
}

module.exports = {
    saveCoordinates,
}