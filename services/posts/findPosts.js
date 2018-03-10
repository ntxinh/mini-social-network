const mongoose = require('mongoose')

const Post = mongoose.model('Post')

exports.findPosts = async (userCurrent) => {
  const posts = Post.find({ user: userCurrent._id })
  return posts
}
