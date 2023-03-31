const express = require('express')
const router = express.Router()

const users = [{name: "Roger"}, {name: "James"}];

router.get('/', (req, res) => {
    //users?name=JJ
    console.log(req.query.name);
    res.send('User list');
})

router.route('/new')
    .get((req, res) => {
        res.render("users/new", { firstName: "Name"});
    })

router.post('/', (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push({ name: req.body.firstName });
        res.redirect(`/users/${users.length - 1}`);
    } else {
        console.log("Error")
        res.render('users/new', { firstName: req.body.firstName });
    }
})

//Use dynamic routes last!!
router.route('/:id')
    .get((req, res) => {
        console.log(req.user);
        res.send(`Get User with ID ${req.params.id}`);
    })

router.param('id', (req, res, next, id) => {
    req.user = users[id]; //globally available
    next();
})


module.exports = router;