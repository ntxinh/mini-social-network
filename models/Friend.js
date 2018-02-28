const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const friendSchema = new Schema({
  userOneId: { type: Schema.Types.ObjectId, ref: 'User' },
  userTwoId: { type: Schema.Types.ObjectId, ref: 'User' },
  userActionId: { type: Schema.Types.ObjectId, ref: 'User' },
  status: {
    type: String,
    trim: true,
    uppercase: true,
    required: 'Please supply a status'
  }
}, { timestamps: true })

module.exports = mongoose.model('Friend', friendSchema)
