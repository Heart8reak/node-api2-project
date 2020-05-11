const express = require('express')

const server = express()

server.use(express.json())

server.get("/", (res, req) => {  
})

module.exports = server