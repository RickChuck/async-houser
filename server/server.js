require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./ctrl');
const auth = require('./auth_ctrl');
const session = require('express-session');


const app = express();
app.use(bodyParser.json());
//session
app.use(session({
    secret: process.env.SESSION_SECRET,   //require -> provides the key for the session encryption
    resave: false,   //optional -> which says whether to save a session that wasnt changed
    saveUninitialized: true    //optional -> which says whether to save a session that is new and wasnt added to
}))

//massive
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
})

//auth endpoints
app.post('/api/auth/login', auth.login)
app.post('/api/auth/register', auth.register)
app.post('/api/auth/logout', auth.logout)
//properties endpoints
app.post('/api/properties', controller.create)
app.get('/api/properties', controller.getHouses)
app.delete('/api/properties/:id', controller.remove)


const port = process.env.SERVER_PORT || port;
app.listen(port, ()=> {
    console.log(`Server is up and running on ${port}`)
})