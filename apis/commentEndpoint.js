const services = require('../services')
const { SuccessResponse, FailResponse } = require('../helpers/responseHelpers')

exports.addComment = async (req, res) => {
  const content = req.body.content
  const postId = req.body.postId
  const comment = await services.comments.addComment(content, postId, req.userCurrent)

  if (!comment) {
    return res.json(
      new FailResponse.Builder()
        .build()
    )
  }

  return res.json(
    new SuccessResponse.Builder()
      .withContent(comment)
      .build()
  )
}
