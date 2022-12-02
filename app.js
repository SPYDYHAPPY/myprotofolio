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
//route for home page
app.get('/',(req, res) => {
  //render index.hbs file
  res.render('index',{
    name: 'Frontend Deveopment'
  });
});
 

 
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});