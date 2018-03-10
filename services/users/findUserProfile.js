const mongoose = require('mongoose')

const User = mongoose.model('User')

const friendStatusConstant = require('../../helpers/constants/friendStatusConstant')

exports.findUserProfile = async (userId) => {
  const user = await User
    .findById(userId)
    .populate('profile')
    .populate('posts')
    .populate({
      path: 'friends',
      match: { status: friendStatusConstant.ACCEPTED }
    })
    .exec((err, user) => {
      if (err) {
        throw new Error(err)
      }
      return user
    })

  return user
}
