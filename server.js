const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

//panggil routes 

var routes = require('./routes');
routes(app);

//parse appliation/json
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(3000, () => {
    console.log(`Server started on port`);
});