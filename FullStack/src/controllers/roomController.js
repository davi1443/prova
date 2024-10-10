const Room = require('../models/room');
const User = require('../models/User');

exports.createRoom = async (req, res) => {
  const room = new Room();
  try {
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.joinRoom = async (req, res) => {
  const { roomId } = req.body;
  const userId = req.user.id;

  try {
    const room = await Room.findOne({ roomId });
    if (!room) return res.status(404).json({ message: 'Room not found' });

    room.participants.push(userId);
    await room.save();
    res.json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
