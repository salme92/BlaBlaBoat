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

//CRUD => UPDATE

 /* U => UPDATE */
 router.post('/newBoat/:id', function (req, res, next) {
    // Get only the properties we need
    const model_properties = _.remove(
      Object.keys(Model.schema.paths),
      k => !['_id', '__v', 'created_at', 'updated_at'].includes(k)
    );
    const updates = _.pick(req.body, model_properties);

    Model.findByIdAndUpdate(req.params.id, updates)
      .then(newObj => {
        debug(`UPDATED: ${newObj._id}`)
        res.json({ message: 'Model updated successfully' })
      })
      .catch(e => res.status(500).json(e))
  });

//CRUD => DELETE

router.get('/newBoat/delete:id', function (req, res, next) {
    Boat.findByIdAndRemove(req.params.id)
      .then(() => res.status(200).json({ message: 'removed' }))
      .catch(e => res.status(500).json(e))
  });


module.exports = router;
