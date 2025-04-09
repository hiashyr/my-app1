const express = require('express');
const router = express.Router();
const { add } = require('../controllers/add');
const { all } = require('../controllers/all');
const { lim } = require('../controllers/lim');

router.post('/add', add);
router.get('/all', all);
router.get('/lim', lim);

module.exports = router;