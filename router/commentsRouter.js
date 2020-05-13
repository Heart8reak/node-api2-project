const express = require('express')

const db = require('../data/db')

const router = express.Router()

router.post('/:id/comments', async (req, res) => {
    const comment = {
        post_id: req.params.id,
        text: req.body.text
    }
    try {
        if (!req.body.text) {
            return res.status(400).send("Comment needs a text prop")
        }
        const commenId = await db.insertComment(comment)
        res.status(201).send(commenId)
    } catch (e) {
        res.status(500).send("Something happened! " + e)
    }
})

// router.get('/:id/comments', async(req, res) => {
//     const id = req.params.id 
//     try {
//         const comment = await db.findPostComments(id)
//         .then((comment) => {
//             if(comment) {
//                 res.status(200).json(comment)
//             } else {
//                 res.status(404).json({
//                     message: "comment not found"
//                 })
//             }
//         })
//         .catch((err) => {
//             console.log(err)
//             res.status(500).json({
//                 message: "Error processing request"
//             })
//         })
//         // post ? res.status(200).send(post) : res.status(404).send("Comments not found")
//     } catch(e) {
//         res.status(500).send("Something happened " + e)
//     }
// })

router.get('/:id/comments', (req, res) => {
    const { id } = req.params
    console.log(id)
    db.findPostComments(id)
        .then(post => {
            console.log(post)
            if (post.length === 0) {
                res.status(404).json({ message: 'The post with the specified ID does not exist.' })
            } else {
                return res.status(200).json(post)
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'The comments information could not be retrieved' })
        })
})

router.get('/comments/:id', async (req, res) => {
    const id = req.params.id
    try {
        const comment = await db.findCommentById(id)
        commnet ? res.status(200).send(comment) :
            res.status(404).send("Comment not found")
    } catch (e) {
        res.status(500).send("Something happened! " + e)
    }
})

module.exports = router