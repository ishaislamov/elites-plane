const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;
mongoose.set('strictQuery', true);

// Для парсинга application/json
app.use(express.json())
// Для парсинга application/x-ww-form-urlencoded
app.use(express.urlencoded({extended: true}))

//Путь к папке с картинками
app.use('/static', express.static(__dirname + '/assets'))

// routes
app.use('/api/planes', require('./routes/planes'))


mongoose.connect("mongodb+srv://admin:admin@cluster0.g2nvhg0.mongodb.net/elites?retryWrites=true&w=majority", {
}).then(console.log("connected to db!"))
  .catch(e => console.log(e))

app.listen(port, (err) => {
    if(err) {
        return console.log(err, 'error is here');
    }
        console.log('Server is fine')
});