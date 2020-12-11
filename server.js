const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 9999

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Sandbox Bakti x ITB !')
})

app.post('/sandbox',(req,res)=>{
    res.send(req.body)
})

app.listen(port, () => {
  console.log(`Sandbox running at port : ${port}`)
})