var express     = require('express');
var path        = require('path');
var bodyParser  = require('body-parser');
var index       = require('./routes/index');
var tasks       = require('./routes/tasks');
var app         = express();
var port        = 5001;

//View Engine
//specify the folder of views
app.set('views', path.join(__dirname, 'views'));
//specify the type engine
app.set('view engine', 'ejs');
//render the html files to ejs flow
app.engine('html', require('ejs').renderFile);

//Set static folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
  console.log('Server started on port ' + port);
})
