const express = require('express')
const app = express()
const port = 3000
const home = require('./routes/home.js')

// ...

app.use('/api/v1', home)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})