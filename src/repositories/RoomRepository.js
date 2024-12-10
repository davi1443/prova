const Room = require('../models/Room');

class RoomRepository {
    static instance;

    constructor() {
        if (RoomRepository.instance) {
            return RoomRepository.instance;
        }
        RoomRepository.instance = this;
    }

    async createRoom(roomData) {
        try {
            const room = new Room(roomData);
            return await room.save();
        } catch (error) {
            throw new Error('Erro ao criar sala');
        }
    }

    async getAllRooms() {
        try {
            return await Room.find();
        } catch (error) {
            throw new Error('Erro ao encontrar salas');
        }
    }

    async findRoomById(roomId) {
        try {
            return await Room.findOne({ roomId });
        } catch (error) {
            throw new Error('Erro em achar sala por id');
        }
    }
}

module.exports = new RoomRepository();
