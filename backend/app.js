var express = require('express');
var app = express()
var body = require('body-parser')

// Body Parser Middle Ware
app.use(body.json())
app.use(body.urlencoded({extended:false}))


app.get('/', function(req, res){
  
var person = {
  name: "Aakef",
  age : 19,
  sex: "male"
}
res.send(person);

});



app.listen(8080, function(){

console.log('App listening on LocalHost:8080')

})
