const express = require('express');
const router = express.Router()
const { getOne, postKitten } = require('../controllers/path.js');
const { getFirst } = require('../controllers/aggregation.js')

router.get('/', getOne);
router.post('/', postKitten);


router.get('/aggregate', getFirst)

module.exports = router