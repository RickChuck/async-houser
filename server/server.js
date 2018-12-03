require('dotenv').config()
const express = require("express");
const massive = require("massive");
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log("Hey Listen! I'm middleware");
    next();
});

let { 
    CONNECTION_STRING, 
    SERVER_PORT, 
    SESSION_SECRET 
} = process.env;

app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false
}));

app.get('/api/houses', async (req, res) => {
    const db = req.app.get('db')
    let houses = await db.get_houses()
    res.status(200).send(houses);
})

app.delete('/api/deleteHouse/:id', async (req, res) => {
    const db = req.app.get('db')
    const updateHouses = await db.delete_houses([+req.params.id])
    res.status(200).send(updateHouses)
})


async function startServer() {
    try {
        const db = await massive(CONNECTION_STRING)
        app.set('db', db)
        console.log('db connected')
        app.listen(SERVER_PORT, () => console.log(`I hear it on port: ${SERVER_PORT}`))
    } catch (err) {
        console.error('startServer function failure in server/server.js', err)
    }
}
startServer();