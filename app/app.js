const socket = io('ws://localhost:8080');
console.log(
    "Welcome to the Chat!\nUse sendMessage(\"text\") to send a message\nand changeUsername(\"text\") to change your username\n\nIf you do not change your username, a random one will be picked for you."
);

socket.on('message', text => {
    console.log(`${text}`);
})

const sendMessage = (text) => {
    socket.emit('message', text);
};

const changeUsername = (text) => {
    socket.emit('nameChange', text);
}