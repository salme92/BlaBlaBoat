const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Boats = require('../models/Boats');
const Reservation = require('../models/Reservation')


//CRUD => CREATE

router.post("/newBoats", (req, res, next) => {
    const { name, prize } = req.body;

    const reserva = new Reservation({ name, prize });
    reserva.save()
        .then((savedReservation) => res.status(200).json(savedReservation))
        .catch((e) => res.status(500).json(e))
})


//CRUD => READ

//CRUD => UPDATE

//CRUD => DELETE



module.exports = router;