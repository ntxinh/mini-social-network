const mongoose = require('mongoose')

const Post = mongoose.model('Post')

exports.likePost = async (postId, userCurrent) => {
  const post = await Post.findById(postId)

  // Check exist

  post.likers.push(userCurrent._id)

  await post.save()
  return post
}
