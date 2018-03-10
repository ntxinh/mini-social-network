const mongoose = require('mongoose')

const Post = mongoose.model('Post')

exports.findPosts = async (userCurrent) => {
  const posts = Post
    .find({ user: userCurrent._id })
    .populate('userLikers')
    .exec((err, posts) => {
      if (err) {
        throw new Error(err)
      }
      return posts
    })
  return posts
}
