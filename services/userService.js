const mongoose = require('mongoose')

const User = mongoose.model('User')

exports.getUserProfile = async (userId) => {
  const user = await User.findById(userId)
}
