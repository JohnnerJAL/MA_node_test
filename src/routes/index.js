const router = require('express').Router();

const postal_codes = require('../components/postal_codes/network');

router.use('/postalcodes', postal_codes);

module.exports = router;