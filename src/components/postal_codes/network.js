const router = require('express').Router();
const multer = require('multer');

const controller = require('./controller');
const response = require('../response');

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: function(req, file, cb) {
        cb('', Date.now() + '.' + file.originalname);
    }
});

const upload = multer({
    storage: storage,
});

router.post('/save_coordinates_file', upload.single('coordinates'), (req, res, next) => {
    controller.saveCoordinates(req.file?.path)
        .then(coordinates => response(req, res, coordinates, 200))
        .catch(next);
})

module.exports = router;