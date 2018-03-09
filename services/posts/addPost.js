const mongoose = require('mongoose')

const Post = mongoose.model('Post')

exports.addPost = async (content, userCurrent) => {
  const post = new Post({
    content,
    user: userCurrent._id
  })

  await post.save()
  return post
}
