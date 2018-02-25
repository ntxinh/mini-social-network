const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const profileSchema = new Schema({
  quote: {
    type: String,
    trim: true
  },
  studiedAt: {
    type: String,
    trim: true
  },
  livesIn: {
    type: String,
    trim: true
  },
  maritalStatus: {
    type: String,
    trim: true
  },
  followedBy: {
    type: Number,
    min: 0
  },
  github: {
    type: String,
    trim: true
  },
  linkedIn: {
    type: String,
    trim: true
  },
  twitter: {
    type: String,
    trim: true
  },
  website: {
    type: String,
    trim: true
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

module.exports = mongoose.model('Profile', profileSchema)
