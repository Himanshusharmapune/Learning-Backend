const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World22')
})

/* 
//
app.get('/about', (req, res) => {
  res.send('About us')
})

app.get('/contact', (req, res) => {
  res.send('Contact')
})
app.get('/blog', (req, res) => {
  res.send('Blog')
}) 
app.get('/blog/learning-web', (req, res) => {
  res.send('Web dev data')
})
*/

app.get('/blog', (req, res) => {
  res.send('Blog')
}) 

app.get('/blog/:slug', (req, res) => {
  console.log(req.params) // will output { slug: 'web' }
   console.log(req.query) // will output { mode: 'dark', region: 'in' }
  res.send(`This is intro to ${req.params.slug}`)
}) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
