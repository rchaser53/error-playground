const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)

app.use(express.static('src', {
  setHeaders: (res) => {
    res.setHeader('Content-Type', 'application/javascript; charset=UTF-8')
  }
}));

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

server.listen(3000, () => {
  console.log('run server')
})