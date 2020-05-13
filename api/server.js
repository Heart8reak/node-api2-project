const express = require('express')
const postsRouter = require('../router/postsRouter')
const commentsRouter = require('../router/commentsRouter')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

server.get("/", (res, req) => {  
})

server.use('/api/posts', commentsRouter)
server.use('/api/posts', postsRouter)

module.exports = server