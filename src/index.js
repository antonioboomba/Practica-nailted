const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');


const app = express();

//Setteo de atributos que necesito
app.set('port',process.env.PORT || 400);
app.set('views',path.join(__dirname,'views'));



app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}));


app.set('view engine','.hbs');




//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(express.static(__dirname + '/public'));


//Variables globales
app.use((req,res,next)=>{
    next();
})

//Routes
app.use(require('./routes/'));

app.listen(app.get('port'),()=>{
    console.log(`El servidor está escuchando en puerto ${app.get('port')}`)
})
