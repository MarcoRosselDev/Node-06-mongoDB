const express = require('express')
const getFirst = require('./db.js');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Worldddd!')
})

app.get('/api/v1/', async (req, res) => {
  // realizar una peticion a mongodb
  const dateRetrun = await getFirst().catch(console.dir);
  if (dateRetrun) {
    res.status(200).json(dateRetrun)
  } else {
    res.status(404).json({ data: "no se encontro ningun documento" })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})