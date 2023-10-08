const express = require('express')
const getFirst = require('./db.js');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Worldddd!')
})

app.get('/api/v1/', (req, res) => {
  // realizar una peticion a mongodb
  const dateRetrun = getFirst().catch(console.dir);
  //console.log(dateRetrun);
  if (dateRetrun) {
    res.status(200).json(dateRetrun)
  } else {
    res.status(404).json({ data: "algo paho" })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})