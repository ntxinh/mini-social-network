const { SuccessResponse, FailResponse } = require('../helpers/responseHelpers')

const services = require('../services')

exports.addFriend = async (req, res) => {
  const friend = await services.friends.addFriend(req.body.userId, req.userCurrent)

  if (!friend) {
    return res.json(
      new FailResponse.Builder()
        .build()
    )
  }

  return res.json(
    new SuccessResponse.Builder()
      .withContent(friend)
      .build()
  )
}
