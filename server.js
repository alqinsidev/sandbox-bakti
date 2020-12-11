const express = require('express')
const app = express()
const port = 9999

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/sandbox',(req,res)=>{
    res.send(req.body)
})

app.listen(port, () => {
  console.log(`Sandbox running at port :${port}`)
})