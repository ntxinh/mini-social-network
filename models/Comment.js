const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const commentSchema = new Schema({
  content: {
    type: String,
    trim: true,
    required: 'Please supply a content of comment'
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  post: { type: Schema.Types.ObjectId, ref: 'Post' }
}, { timestamps: true })

module.exports = mongoose.model('Comment', commentSchema)
