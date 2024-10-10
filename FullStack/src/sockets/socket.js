module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('User connected:', socket.id);
  
      socket.on('join-room', (roomId) => {
        socket.join(roomId);
        socket.to(roomId).emit('user-connected', socket.id);
  
        socket.on('signal', (data) => {
          socket.to(roomId).emit('signal', data);
        });
  
        socket.on('disconnect', () => {
          socket.to(roomId).emit('user-disconnected', socket.id);
        });
      });
    });
  };  