const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Boats = require('../models/Boats');
const Reservation = require('../models/Reservation')


//CRUD => CREATE

router.post("/newBoats", (req, res, next) => {
    console.log('entro en el back')
    console.log(req.body)
    const { origin, dest, date } = req.body;

    const reserva = new Reservation({ origin, destination: dest, date });
    reserva.save()
        .then((savedReservation) => res.status(200).json(savedReservation))
        .catch((e) => res.status(500).json(e))
})


//CRUD => READ

// router.get("/showReservation", (req,res,next) => {
//     Reservation.find()
//                 .then((boatsFound) => res.status(200).json(boatsFound))
//                 .catch((e) => res.status(500).json(e))

// })

router.get("/trip/myTrips", function (req, res) {
    const UserId = req.user._id;
    console.log(UserId)
      Reservation.find({author:UserId}, function(err, p) {
          User.populate(p, { path: "author" } ,function(err, p){
          res.status(200).json(p);
          }); 
      });
  });

//CRUD => UPDATE

router.post('/reservationUpdate/:id', (req,res) => {
    const reservationId = req.params.id;
    const {name,prize} = req.body;
    const updates = {name,type,boatId};
    console.log(updates)
  
    Reservation.findByIdAndUpdate(reservationId, updates)
        .then(() => res.status(200).json({ message: 'Update' }))
        .catch(e => res.status(500).json(e))
  })


//CRUD => DELETE

router.get('/deleteReservation/:id', function (req, res, next) {
    Reservation.findByIdAndRemove(req.params.id)
      .then(() => res.status(200).json({ message: 'removed' }))
      .catch(e => res.status(500).json(e))
  });


module.exports = router;