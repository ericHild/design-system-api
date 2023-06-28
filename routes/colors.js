const express = require('express');
const router = express.Router();

const data = require('./../data/colors.json');

/* GET colors listing. */
router.get('/colors', function(req, res, next) {
    res.send(data);
});

module.exports = router;