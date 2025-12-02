const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const app = express()
const port = 3000


app.use(express.static("public"))

app.get('/', (req, res) => {
  console.log("Get is working!!")
  res.send('Hello World0!')
}).post('/', (req, res) => {
  console.log("Post is working!!")
  res.send('Hello World1!')
}).put('/', (req, res) => {
  console.log("put is working!!")
  res.send('Hello World! put')
})

app.get("/index", (req,res)=>{
  console.log("Hey its index")
  res.sendFile('templates/index.html',{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//blog starts
app.use('/blog',blog)
app.use('/shop',shop)