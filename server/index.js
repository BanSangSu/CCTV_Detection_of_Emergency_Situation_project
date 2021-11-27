const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3000;

const wsServer = new WebSocket.Server({ server: httpServer });


app.use(express.urlencoded({ extended: false }));

// array of connected websocket clients
let connectedClients = [];

wsServer.on('connection', (ws, req) => {
    console.log('Connected');
    // add new connected client
    connectedClients.push(ws);
    // listen for messages from the streamer, the clients will not send anything so we don't need to filter
    ws.on('message', data => {
        // send the base64 encoded frame to each connected ws
        connectedClients.forEach((ws, i) => {
            if (ws.readyState === ws.OPEN) { // check if it is still connected
                ws.send(data); // send
            } else { // if it's not connected remove from the array of connected ws
                connectedClients.splice(i, 1);
            }
        });
    });
});

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.use(express.static('views'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
});
app.get('/streamer0', (req, res) => res.sendFile(path.resolve(__dirname, './streamer0.html')));
app.get('/streamer1', (req, res) => res.sendFile(path.resolve(__dirname, './streamer1.html')));
app.get('/streamer2', (req, res) => res.sendFile(path.resolve(__dirname, './streamer2.html')));
app.get('/streamer3', (req, res) => res.sendFile(path.resolve(__dirname, './streamer3.html')));


httpServer.listen(PORT, () => console.log(`HTTPS Server running... https://wkuassemble.duckdns.org:${PORT}`));
