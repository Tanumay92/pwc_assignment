const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const route = require('./server/modules');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(fileUpload());

app.use('/api',route);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "server/index.html"));
  });


app.listen(8000, function() {
    console.log('Server is running at localhost:8000');
})