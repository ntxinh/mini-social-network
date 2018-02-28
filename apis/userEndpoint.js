const { SuccessResponse, FailResponse } = require('../helpers/responseHelpers')

const services = require('../services')

exports.findUserProfile = async (req, res) => {
  const user = await services.users.findUserProfile(req.params.userId)

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
