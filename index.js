var express =require('express');

//Add setup
var app =express();
var server=app.listen(4000,function(){
    console.log('listeing')
});

//static
app.use(express.static('public'));