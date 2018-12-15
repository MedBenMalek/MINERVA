const express = require('express');
const router = express.Router();
const Post = require('../Models/Post');

router.post('',(req,res,next) => {
  const post = new Post(req.body);
  // save post to database
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully",
      postId: createdPost._id
    });
  });
});

router.get('',(req,res,next) => {
  Post.find().then((doc) => {
    res.status(200).json({
      message: 'post fetched successfully',
      posts: doc
    })
  });

});

router.delete('/:id',(req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then((result) => {
    console.log(result);
    res.status(200).json({ message: 'post deleted successfully' })
  })
});

module.exports = router;
