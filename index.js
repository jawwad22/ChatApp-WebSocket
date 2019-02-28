var express =require('express');
var socket =require('socket.io');
//Add setup
var app =express();
var server=app.listen(4000,function(){
    console.log('listeing')
});

//static
app.use(express.static('public'));

//socket setup
var io=socket(server);

io.on('connection',function(socket){
    console.log('made socket connection',socket.id)
})