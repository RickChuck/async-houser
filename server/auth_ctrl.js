module.exports = {
    login: (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.userLogin([username, password]).then((response) => {
            console.log(222, response)
            req.session.userId = response[0].id
            res.sendStatus(200)})
        // .catch( err => {
        //     res.status(500).send({errorMessage: "Oops!"})
        //     console.log(err)
        // })
    },
    register: (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.registerUser([username, password]).then((response) => {
            console.log(1111, response)
            req.session.userId = response[0].id
            res.sendStatus(200)})
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}

// .catch((err) => {
//     console.log('err')
//     res.status(500).send(err)
// })