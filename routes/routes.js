const express = require("express")
const router = express.Router()
const Video = require("../models/video")
const Product = require("../models/product")
const Comment = require("../models/comment")


router.get('/', async (req, res) => {
    try {
        const allVideos = await Video.find()
        res.status(200).json({
        videos: allVideos
        })
    }
    catch (err) {
        res.status(500).json({
        message: err.message
        })
    }
})

router.get('/video/:id', async (req, res) => {
    try {
        const videoId = req.params.id
        const selectedVideo = await Video.find( {videoId} )
        res.status(200).json({
        video: selectedVideo
        })
    }
    catch (err) {
        res.status(500).json({
        message: err.message
        })
    }
})

router.get('/product/:id', async (req, res) => {
    try {
        const videoId = req.params.id
        const allProducts = await Product.find( {videoId} )
        res.status(200).json({
        products: allProducts
        })
    }
    catch (err) {
        res.status(500).json({
        message: err.message
        })
    }
})

router.post('/comment/:id', (req, res) => {
    const {userName, comment} = req.body
    const videoId = req.params.id
    
    const postComment = new Comment({
        userName: userName,
        comment: comment,
        videoId: videoId
    })

    try {
        const commentToSave = postComment.save()
        res.status(201).json({
            saved : postComment})
    }
    catch (err) {
        res.status(400).json({
        message: err.message
        })
    }
})

router.get('/comment/:id', async (req, res) => {
    try {
        const videoId = req.params.id
        const allComments = await Comment.find({videoId})
        res.status(200).json({
        comments: allComments
        })
    }
    catch (err) {
        res.status(500).json({
        message: err.message
        })
    }
})


module.exports = router