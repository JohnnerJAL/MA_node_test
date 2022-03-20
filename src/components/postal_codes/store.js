const PostalCode = require('./model');

async function saveCoordinates(...coordinates) {
    try {
        const newPostalCode = await new PostalCode({
            location: {
                coordinates,
            },
            date: new Date(),
        });
    
        newPostalCode.save();
    
        return newPostalCode;
    } catch (error) {
        return error;
    }
}

module.exports = {
    saveCoordinates,
}