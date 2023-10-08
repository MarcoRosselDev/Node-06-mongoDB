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
    let send = {}
    await dateRetrun.forEach(a => send.push(a))
    res.status(200).json(send)
  } else {
    res.status(404).json({ data: "no se encontro ningun documento" })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})