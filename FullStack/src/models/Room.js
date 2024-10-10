const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const RoomSchema = new mongoose.Schema({
  roomId: { type: String, default: uuidv4 },
  createdAt: { type: Date, default: Date.now },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Room', RoomSchema);