// enrutador de api
const express = require('express')
const router = express.Router()
const { getFirst, getOne, postKitten } = require('../controllers/c_home.js');

router.get('/', getOne)

router.get('/aggregate', getFirst)

router.post('/', postKitten)

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router