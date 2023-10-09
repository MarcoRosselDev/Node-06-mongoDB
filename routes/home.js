// enrutador de api
const express = require('express')
const router = express.Router()
const { getOne, postKitten } = require('../controllers/path.js');
const { getFirst } = require('../controllers/aggregation.js')

router.get('/', getOne);
router.post('/', postKitten);


router.get('/aggregate', getFirst)

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router