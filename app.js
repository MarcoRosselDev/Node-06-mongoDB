const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Worldddd!')
})

app.get('/api/v1/', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})