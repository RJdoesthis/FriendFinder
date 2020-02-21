const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const http = require("http");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);


app.listen(port, () => console.log("Server listening on: http://localhost:" + port));



