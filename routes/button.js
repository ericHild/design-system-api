const express = require('express');
const router = express.Router();

const data = require('./../data/buttons.json');

/* GET button listing config. */
router.get('/button', function(req, res, next) {
    res.send(data);
});

module.exports = router;