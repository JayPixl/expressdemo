/* const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
    res.send("Hi there");
});

app.get("/about", (req, res) => {

    res.send("<h1>About</h1>");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
}) */

const express = require('express');
const app = express();


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
//app.use(logger);

app.get("/", logger,  (req, res) => {
    console.log('Here');
    res.render('index', { text: 'World' });
});



const userRouter = require("./routes/users");

app.use('/users', userRouter);


function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}


app.listen(3000);

