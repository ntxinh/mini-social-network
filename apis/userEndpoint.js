const { SuccessResponse, FailResponse } = require('../helpers/responseHelpers')

const { findUserProfile } = require('../services/users/findUserProfile')

exports.findUserProfile = async (req, res) => {
  const user = await findUserProfile(req.params.userId)

  if (!user) {
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
