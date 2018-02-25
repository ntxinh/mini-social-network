const { SuccessResponse, FailResponse } = require('../helpers/responseHelpers')

const { getUserProfile } = require('../services/userService')

exports.getUserProfile = (req, res) => {
  const user = getUserProfile(req.params.userId)

  if (user) {
    return res.json(
      new FailResponse.Builder()
        .build()
    )
  }

  return res.json(
    new SuccessResponse.Builder()
      .withContent(user)
      .build()
  )
}
