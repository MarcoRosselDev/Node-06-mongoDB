const express = require('express');
const router = express.Router()
const { getOne, postKitten } = require('../controllers/path.js');
const { getFirst } = require('../controllers/aggregation.js')

router.get('/', getOne);
router.post('/', postKitten);
router.post('/aggregate', (req, res) => {
  console.log(req.body);
  res.status(201).json(req.body)
})


router.get('/aggregate', getFirst)

module.exports = router