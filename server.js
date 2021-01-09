const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const passport = require("passport");


const app = express();
const users = require("./controllers/api/users")


app.use(

    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

//DATA BASE CONFIGURATION

const dbkeys = require("./config/key").mongoURI;

mongoose.connect( 
    dbkeys, 
    {useNewUrlParser: true} )

        .then(()=> console.log("database connection successful"))
        .catch(err => console.log(err))

app.use(passport.initialize());
require("./config/passport")(passport);


app.use("/api/users", users);


const port = 5000;

app.listen( port, () => console.log("server us up and running on port 5000!"))

