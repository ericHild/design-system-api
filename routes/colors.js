const express = require('express');
const router = express.Router();

const colors = require('./../data/colors.json');

/* GET colors listing. */
router.get('/colors', function(req, res, next) {
    res.send(colors);
});

module.exports = router;