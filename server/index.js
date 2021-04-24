// Names from: https://github.com/dominictarr

const http = require('http').createServer();
const fs = require('fs');
const io = require('socket.io')(http, {
    cors: { origin: '*' }
});

let namesJson = {};

fs.readFile('names.json', 'utf-8', (err, data) => {
    if (err) throw err;
    namesJson = JSON.parse(data);
});

io.on('connection', (socket) => {
    let placeholder = namesJson[Math.floor(Math.random() * namesJson.length - 1)];
    let name;    

    const hasUsername = (checkee) => {
        if (checkee == null) return placeholder;
        else return name;
    }

    socket.on('message', (message) => {
        io.emit('message', `${hasUsername(name)}: ${message}`)
    });

    socket.on('nameChange', (message) => {
         name = message;
    });
});

http.listen(8080, () => console.log("Listening on :8080"));