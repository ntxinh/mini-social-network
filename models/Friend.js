const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const friendSchema = new Schema({
  user_one_id: { type: Schema.Types.ObjectId, ref: 'User' |},
  user_two_id: { type: Schema.Types.ObjectId, ref: 'User' },
  user_action_id: { type: Schema.Types.ObjectId, ref: 'User' },
  status: {
    type: String,
    trim: true,
    uppercase: true,
    required: 'Please supply a content'
  }
}, { timestamps: true })

module.exports = mongoose.model('Like', friendSchema)
