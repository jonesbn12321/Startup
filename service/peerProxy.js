const { WebSocketServer, WebSocket } = require('ws');

function peerProxy(httpServer) {
  // Create a websocket object
  const socketServer = new WebSocketServer({ server: httpServer });
  const players = new Map();

  socketServer.on('connection', (socket) => {
    socket.isAlive = true;

    // Forward messages to everyone except the sender
    socket.on('message', (raw)=>{
      const data = JSON.parse(raw);
      if(data.type ==="player_join"){
        players.set(data.name, {name:data.name, avatar:data.avatar});
        socket.send(JSON.stringify({
          type:"player_list",
          players: Array.from(players.values())
        }));

        socketServer.clients.forEach((client)=>{
          if(client!== socket && client.readyState===WebSocket.OPEN){
            client.send(raw);
          }
        });
      }
      if(data.type === "player_leave"){
        players.delete(data.name);

        socketServer.clients.forEach((client)=>{
          if(client.readyState===WebSocket.OPEN){
            client.send(raw);
          }
        });
      }
    });
// Respond to pong messages by marking the connection alive
    socket.on('pong',()=>{
      socket.isAlive = true;
    });
  });

    

  // Periodically send out a ping message to make sure clients are alive
  //I"M HERE RIGHT NOW
  setInterval(() => {
    socketServer.clients.forEach((client)=>{
      if(!client.isAlive) return client.terminate();
      client.isAlive = false;
      client.ping();
    });
  }, 10000);
}

module.exports = { peerProxy };
