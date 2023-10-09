// enrutador de api
const express = require('express')
const router = express.Router()
const { getFirst, getOne } = require('../controllers/c_home.js');

router.get('/', async (req, res) => {
  // realizar una peticion a mongodb
  const dateRetrun = await getOne().catch(console.dir);
  if (dateRetrun) {
    res.status(200).json(dateRetrun)
  } else {
    res.status(404).json({ data: 'no se encontro nada' })
  }
})

router.get('/aggregate', async (req, res) => {
  const dateRetrun = await getFirst().catch(console.dir);
  if (dateRetrun) {
    res.status(200).json(dateRetrun)
  } else {
    res.status(404).json({ data: "no se encontro ningun documento" })
  }
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router