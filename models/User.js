const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  lastName: {
    type: String,
    trim: true,
    required: 'Please supply a last name'
  },
  firstName: {
    type: String,
    trim: true,
    required: 'Please supply a first name'
  },
  username: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'Please supply a username'
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      isAsync: true,
      validator: validator.isEmail,
      message: 'Invalid Email Address'
    },
    required: 'Please Supply an email address'
  },
  password: {
    type: String,
    trim: true,
    required: 'Please supply a password'
  },
  avatarUrl: {
    type: String,
    trim: true,
    required: 'Please supply an avatar'
  },
  jobTitle: {
    type: String,
    trim: true
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  enable: {
    type: Boolean,
    default: false
  }
}, { timestamps: true, toJSON: { virtuals: true } })

// Populate Virtuals
userSchema.virtual('profile', {
  ref: 'Profile',
  localField: '_id',
  foreignField: 'user',
  justOne: true
})

userSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'user',
  justOne: false
})

userSchema.virtual('friends', {
  ref: 'Friend',
  localField: '_id',
  foreignField: 'userActionId',
  justOne: false
})

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      // Skip it & stop this function from running
      return next()
    }

    // Generate a salt
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))

    // Hash the password along with our new salt
    const hash = await bcrypt.hash(this.password, salt)

    // Override the cleartext password with the hashed one
    this.password = hash

    return next()
  } catch (e) {
    return next(e)
  }
})

module.exports = mongoose.model('User', userSchema)
