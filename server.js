const express = require('express');
var app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 3000;

var players = [];
//app.use(express.static('public'));

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
    io.emit('playerUpdate', players);
  });

  socket.on('openCase', () => {
    var rarity = 'mil spec';
    var open = Math.random() * (100-1) + 1;
    console.log(open);
    if(open<=78) rarity = 'milSpec';
    if(open > 78 && open <=95) rarity = 'restricted';
    if(open > 95 && open <= 97) rarity = 'classified';
    if(open>97 && open<=99) rarity = 'covert';
    if(open >99 && open <=100) rarity = 'knife';
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
