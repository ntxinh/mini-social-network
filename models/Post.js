const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const postSchema = new Schema({
  content: {
    type: String,
    trim: true,
    required: 'Please supply a content of post'
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  likers: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true, toJSON: { virtuals: true } })

postSchema.virtual('userLikers', {
  ref: 'User',
  localField: 'likers',
  foreignField: '_id',
  justOne: false
})

module.exports = mongoose.model('Post', postSchema)
