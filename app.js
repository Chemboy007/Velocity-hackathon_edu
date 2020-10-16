var express = require("Express");
var path = require('path')
var app = express();

var registration = require('./Routes/Register.js');


app.use(express.urlencoded({ extended: true }));

app.listen(8080,'0.0.0.0', function (err) {
    if (err) throw err;
    console.log("listening on port" + 8080)
});

// app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render("Home");  
     
})

app.use('/register', registration);



// app.get('/register',function(req, res){
//     res.send("Karvy page");
// })