const mongoose = require('mongoose')

const Friend = mongoose.model('Friend')
const User = mongoose.model('User')

const friendStatusConstant = require('../../helpers/constants/friendStatusConstant')

exports.addFriend = async (userTwoId, userCurrent) => {
  const userTwo = await User.findById(userTwoId)

  const friend = new Friend({
    userOneId: userCurrent._id,
    userTwoId: userTwo._id,
    userActionId: userCurrent._id,
    status: friendStatusConstant.PENDING
  })

  await friend.save()
  return friend
}
