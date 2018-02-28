require('dotenv').config();
const mongoose = require('mongoose');
const dbURL = process.env.dbURL
const Boats = require('../models/Boats');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

mongoose.connect('mongodb://localhost/Project-M3_Boats')
.then(() => console.log("Conectado!")
.catch(err=>console.log(err)));

let salt = bcrypt.genSaltSync(bcryptSalt);

const boat = [{
        name: 'Excalibur',
        type: 'Yate',
        model: 'Nimbus',
        Valoration: 3,
        imgBoat: 'http://via.placeholder.com/350x150'
    },
    {
        name: 'Monaco',
        type: 'Catamaran',
        model: 'Fastest',
        Valoration: 4,
        imgBoat: 'http://via.placeholder.com/350x150'
    },
    {
        name: 'Monete',
        type: 'Velero',
        model: 'Fastest',
        Valoration: 2,
        imgBoat: 'http://via.placeholder.com/350x150'
    },
];




Boats.collection.drop();

boat.forEach(p => {
    let pr = new Boats(p);
    console.log(p.password);
    pr.save()
    .then(User => console.log(`Boat created  ${boat.name}`))
    .catch(err => console.log(err));
});

