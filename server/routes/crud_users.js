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
router.get("/showUsers", (req,res,next) => {
    User.find()
                .then((showUsers) => res.status(200).json(showUsers))
                .catch((e) => res.status(500).json(e))

})
//CRUD => UPDATE

router.post('/updateBoat/:id', (req,res) => {
    const userId = req.params.id;
    const {name,type,imgBoat} = req.body;
    const updates = {name,type,imgBoat,userId};
    console.log(updates)
  
    Boats.findByIdAndUpdate(userId, updates)
        .then(() => res.status(200).json({ message: 'Update' }))
        .catch(e => res.status(500).json(e))
  })


//CRUD => DELETE

router.get('/deleteUser/:id', function (req, res, next) {
    User.findByIdAndRemove(req.params.id)
      .then(() => res.status(200).json({ message: 'removed' }))
      .catch(e => res.status(500).json(e))
  });



module.exports = router;
