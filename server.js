const moment = require('moment/moment');

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.get('/', (req, res)=> {
    res.send('<h1>Hello World</h1>');
});

http.listen(31000, ()=>{
    console.log('listning on port 31000');
});

io.on('connection', (socket) =>{
    console.log('Client connected');
    dataUpdate(socket);
});
// { x: new Date('2020-11-02'), y: 1 },
let data = [];

function dataUpdate(socket) {

    var d = Date.now();
    d = Date.now();

    var a = 20

    const m = moment(new Date());
    console.log(m.format('h:mm:ss'))
    data.push({x: m.format('h:mm:ss'), y:Math.floor(Math.random() * 7)})
    socket.emit('dataupdate', data.slice(data.length - 10), data.length);

    setTimeout(() =>{
        dataUpdate(socket);
    }, 3000)
}
