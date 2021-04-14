const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//Get all the posts
router.get('/', async (req, res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err.message});
    }
});

//Submit a post
router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
    const savePost = await post.save();
    res.json(savePost);
    }catch(err){
        res.json({message: err.message});
    }
});

//Get specific post
router.get('/:postID', async (req, res) =>{
    try{
        const post = await Post.findById(req.params.postID);
        res.json(post);
    }catch(err){
        res.json({message:  err.message});
    }
});

//Delete specific post
router.delete('/:postID', async (req, res)=>{
    try{
        const removePost = await Post.remove({_id: req.params.postID});
        res.json(removePost);
    }catch(err){
        res.json({message:  err.message});
    }

});

//Update a post
router.patch('/:postID', async (req, res) =>{
    try{
        const updatePost = await Post.updateOne(
            {_id: req.params.postID}, 
            {$set: {title : req.body.title}}
            );
        res.json(updatePost);
    }catch(err){
        res.json({message:  err.message});
    }
});


module.exports = router;