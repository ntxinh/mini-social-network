const { authenticate } = require('./users/authenticate')
const { confirmResetPassword } = require('./users/confirmResetPassword')
const { confirmSignUp } = require('./users/confirmSignUp')
const { findUserCurrent } = require('./users/findUserCurrent')
const { findUsers } = require('./users/findUsers')
const { forgotPassword } = require('./users/forgotPassword')
const { signUp } = require('./users/signUp')
const { testAxios } = require('./users/testAxios')
const { findUserByEmail } = require('./users/findUserByEmail')

const { findUserProfile } = require('./users/findUserProfile')
const { findUserProfileByUsername } = require('./users/findUserProfileByUsername')
const { addFriend } = require('./friends/addFriend')
const { addPost } = require('./posts/addPost')
const { likePost } = require('./posts/likePost')
const { findPosts } = require('./posts/findPosts')
const { addComment } = require('./comments/addComment')

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
    findUserByEmail,
    findUserProfile,
    findUserProfileByUsername
  },
  friends: {
    addFriend
  },
  posts: {
    addPost,
    likePost,
    findPosts
  },
  comments: {
    addComment
  }
}

module.exports = services
