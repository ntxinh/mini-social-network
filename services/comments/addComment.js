const mongoose = require('mongoose')

const Comment = mongoose.model('Comment')

exports.addComment = async (content, postId, userCurrent) => {
  const comment = new Comment({
    content,
    user: userCurrent._id,
    post: postId
  })

  await comment.save()
  return comment
}
