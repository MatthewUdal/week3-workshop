const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'www')));

require('./routes/homeroute.js').route(app);
require('./routes/accountroute.js').route(app);
require('./routes/loginroute.js').route(app);

let server = http.listen(3000, function (){
    let host = server.address().address;
    let port = server.address().port;
    console.log("\nMy first Node.js Server!");
    console.log("Server listening on: " + host + " port: " + port);
});
