const express = require('express');
const router = express.Router();
const User = require('../models/User');


//CRUD => CREATE

router.post("/newUser", (req, res, next) => {
    const { username, password, imageProfile, Valoration } = req.body;
    const user = new User({ username, password, imageProfile, Valoration });
    user.save()
        .then((savedUser) => res.status(200).json(savedUser))
        .catch((e) => res.status(500).json(e))
})


//CRUD => READ

  

//CRUD => UPDATE

//CRUD => DELETE



module.exports = router;
