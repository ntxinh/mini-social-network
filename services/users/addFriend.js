const mongoose = require('mongoose')

const Friend = mongoose.model('Friend')
const User = mongoose.model('User')

exports.addFriend = async (userTwoId, userCurrent) => {
  const userTwo = await User.findById(userTwoId)

  const friend = new Friend({
    userOneId: userCurrent._id,
    userTwoId: userTwo._id,
    userActionId: userCurrent._id,
    status: 'PENDING'
  })

  await friend.save()
  return friend
}
