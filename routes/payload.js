const express = require('express');
const router = express.Router();

const {transformPayload} = require('../controllers/payload');

router.post('/',transformPayload);

module.exports = router;