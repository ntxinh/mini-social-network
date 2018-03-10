const services = require('../services')
const { SuccessResponse, FailResponse } = require('../helpers/responseHelpers')

exports.addPost = async (req, res) => {
  const content = req.body.content
  const post = await services.posts.addPost(content, req.userCurrent)

  if (!post) {
    return res.json(
      new FailResponse.Builder()
        .build()
    )
  }

  return res.json(
    new SuccessResponse.Builder()
      .withContent(post)
      .build()
  )
}

exports.likePost = async (req, res) => {
  const postId = req.body.postId
  const post = await services.posts.likePost(postId, req.userCurrent)

  if (!post) {
    return res.json(
      new FailResponse.Builder()
        .build()
    )
  }

  return res.json(
    new SuccessResponse.Builder()
      .withContent(post)
      .build()
  )
}

exports.getPosts = async (req, res) => {
  const posts = await services.posts.findPosts(req.userCurrent)

  if (!posts) {
    return res.json(
      new FailResponse.Builder()
        .build()
    )
  }

  return res.json(
    new SuccessResponse.Builder()
      .withContent(posts)
      .build()
  )
}
