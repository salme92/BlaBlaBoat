const express = require('express');
const router = express.Router();
const Boats = require('../models/Boats');


//CRUD => CREATE

router.post("/newBoat", (req,res,next) => {
 const {name, type, imgBoat} = req.body;
 const Boat = new Boats({name, type, imgBoat});
 Boat.save()
            .then((savedBoat) => res.status(200).json(savedBoat))
            .catch((e) => res.status(500).json(e));
 
})


//CRUD => READ

router.get("/showBoat", (req,res,next) => {
    Boats.find()
                .then((boatsFound) => res.status(200).json(boatsFound))
                .catch((e) => res.status(500).json(e))

})
//CRUD => UPDATE

router.post('/updateBoat/:id', (req,res) => {
    const boatId = req.params.id;
    const {name,type,imgBoat} = req.body;
    const updates = {name,type,imgBoat,boatId};
    console.log(updates)
  
    Boats.findByIdAndUpdate(boatId, updates)
        .then(() => res.status(200).json({ message: 'Update' }))
        .catch(e => res.status(500).json(e))
  })

//CRUD => DELETE

router.get('/deleteBoat/:id', function (req, res, next) {
    Boats.findByIdAndRemove(req.params.id)
      .then(() => res.status(200).json({ message: 'removed' }))
      .catch(e => res.status(500).json(e))
  });


module.exports = router;