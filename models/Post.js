const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const postSchema = new Schema({
  content: {
    type: String,
    trim: true,
    required: 'Please supply a content'
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  liker: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)
