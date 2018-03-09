const mongoose = require('mongoose')

const Friend = mongoose.model('Friend')
const User = mongoose.model('User')

exports.addFriend = async (userTwoId) => {
  const userTwo = await User.findById(userTwoId)

  const friend = new Friend({
    userOneId: userTwo._id,
    userTwoId: userTwo._id,
    userActionId: userTwo._id,
    status: 'PENDING'
  })

  await friend.save()
  return friend
}
