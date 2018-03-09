const { authenticate } = require('./users/authenticate')
const { confirmResetPassword } = require('./users/confirmResetPassword')
const { confirmSignUp } = require('./users/confirmSignUp')
const { findUserCurrent } = require('./users/findUserCurrent')
const { findUsers } = require('./users/findUsers')
const { forgotPassword } = require('./users/forgotPassword')
const { signUp } = require('./users/signUp')
const { testAxios } = require('./users/testAxios')

const { findUserProfile } = require('./users/findUserProfile')
const { addFriend } = require('./users/addFriend')

const services = {
  users: {
    authenticate,
    confirmResetPassword,
    confirmSignUp,
    findUserCurrent,
    findUsers,
    forgotPassword,
    signUp,
    testAxios,
    findUserProfile
  },
  friends: {
    addFriend
  }
}

module.exports = services
