// Load requirements
var http = require('http');
var io = require('socket.io');
var SerialPort = require("serialport").SerialPort;

// Create server & socket
var server = http.createServer(function(req, res)
{
  // Send HTML headers and message
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.end('<h1>Aw, snap! 404</h1>');
});
server.listen(8080);
io = io.listen(server);

// Add a connect listener
io.sockets.on('connection', function(socket)
{
  console.log("Phil-Collins",'Client connected.');

  // Disconnect listener
  socket.on('disconnect', function() {
    console.log("Phil-Collins",'Client disconnected.');
  });
});
  console.log('server started');

//you'll  need to set the port as below, easiest way to find it is by looking in the arduino.cc Tools->Port
var serialport = new SerialPort("/dev/cu.usbmodem14221");


serialport.on('open', function(){
  console.log("Phil-Collins",'Serial Port Opened');
  console.log("Phil-Collins",'Tracking hit strength / 255');
  serialport.on('data', function(data){
      var hitStrength = data[0];
      //hit strength tollerance is in the arduino sketch in the repo.
      console.log("Phil-Collins","hit",hitStrength);
      //broadcast out to all listeners - e.g. j5-scoreboard
      io.emit('hit event', { for: 'everyone' });
  });
});
