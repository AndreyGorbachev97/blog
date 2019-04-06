const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
//http://localhost:5000/api/post (get)
router.get('/', async (req, res) => {
    const posts = await Post.find({})
    res.status(200).json(posts)
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const postData = {
        title: req.body.title,
        text: req.body.text,
    }

    const post = new Post(postData)
    await post.save()
    res.status(201).json(post)
})

router.post('/:id', async (req, res) => {
    console.log(req.body)
    const postData = {
        title: req.body.title,
        text: req.body.text,
    }
    
    await Post.update({_id: req.params.id}, postData, {upsert: true})
    res.status(201).json({
        massage: 'update'
    })
})

router.delete('/:id', async (req, res) => {
    await Post.remove({_id: req.params.id})
    res.status(200).json({
        massage: 'удалено'
    })
})

module.exports = router