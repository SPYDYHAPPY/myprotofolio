//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
const app = express();
 
//set dynamic views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
//set public folder as static folder for static file
app.use(express.static('public'));
//For convenience, registerPartials provides a quick way to load all partials from a specific directory:
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//route for home page
app.get('/',(req, res) => {
  //render index.hbs file
  res.render('index',{
    name: 'Frontend Development'
  });
});

//timeline route
app.get('/history',(req, res) => {
  //render timeline.hbs file
  res.render('timeline',{
    name: 'Learning History'
  });
});

//git cli documentation route
app.get('/gitcli',(req, res) => {
  //render gitcli.hbs file
  res.render('git-cli',{
    name: 'Git-cli Documentation'
  });
});
 

 
var server = app.listen(8000, () => {
   //var host = server.address().address
   var port = server.address().port

   // console.log("server is running at http://%s:%s", host, port);
    console.log("server is running at http://localhost:%s", port);
});