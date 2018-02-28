const { findUserProfile } = require('./users/findUserProfile')
const { addFriend } = require('./users/addFriend')

const services = {
  users: {
    findUserProfile
  },
  friends: {
    addFriend
  }
}

module.exports = services
