const express = require('express')
const postsRouter = require('../router/postsRouter')
const commentsRouter = require('../router/postsRouter')

const server = express()

server.use(express.json())

server.get("/", (res, req) => {  
})

server.use('/api/posts', commentsRouter)
server.use('/api/posts', postsRouter)

module.exports = server