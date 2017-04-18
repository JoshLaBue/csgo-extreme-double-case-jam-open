const express = require('express');
var app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 3000;

var players = [];
app.use(express.static('public'));

app.use('/players', (req, res) => {
  res.send(players);
});

app.use('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  //console.log('Client Connected!');

  var player = {
    'name':null
  }

  socket.on('join', (name) => {
    player.name = name;
    console.log(`${name} joined`);
    players.push(player);
  });

  socket.on('disconnect', () => {
    console.log(`${player.name} disconnected`);
    if(player == null) return;
    //console.log(`${player.name} disconnected`);
    for(var i = 0; i<players.length; i++) {
      if(players[i] = player) {
        players.splice(i, 1);
      }
    }
    //io.emit('playerUpdate', players);
  });

  socket.on('openCase', () => {
    var rarity = 'mil spec';
    var open = Math.random() * (100-1) + 1;
    console.log(open);
    if(open<=50) rarity = 'milSpec';
    if(open > 50 && open <=75) rarity = 'restricted';
    if(open > 75 && open <= 90) rarity = 'classified';
    if(open>90 && open<=96) rarity = 'covert';
    if(open >96 && open <=100) rarity = 'knife';
    io.emit('caseResult', rarity);
  });

  socket.on('heartBeat', () => {
    if(player.name == null) return;
      console.log(`Heartbeat from ${player.name}`);
    for(var i = 0; i<players.length; i++) {
      if(players[i] = player) {
        console.log(`${player.name} successful heartbeat`);
        return;
      }
    }
    console.log(`${player.name} UNSUCCESSFUL heartbeat`);
    players.push(player);
  });
});

http.listen(port);
