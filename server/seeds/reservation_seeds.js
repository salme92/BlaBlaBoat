require('dotenv').config();
const mongoose = require('mongoose');
const dbURL = process.env.dbURL
const Reservation = require('../models/Reservation');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

mongoose.connect('mongodb://localhost/Project-M3_Boats')
.then(() => console.log("Conectado!")
.catch(err=>console.log(err)));

let salt = bcrypt.genSaltSync(bcryptSalt);

const date = [{
        origin: 'Valencia',
        destination: 'Ibiza',
        Date: Date.now(),
        longitude: 38.910575,
        latitud: 1.437703
    },
    {  
        origin: 'Estepona',
        destination: 'Gibraltar',
        Date: new Date(2018,09,23),
        longitude: 36.132691,
        latitud: -5.349352
    },
    {  
        origin: 'A Coruña',
        destination: 'Albufeira',
        Date: new Date(201,12,31),
        longitude: 37.087352,
        latitud: -8.244767
    },
];

Reservation.collection.drop();

date.forEach(p => {
    let pr = new Reservation (p);
    pr.save()
    .then(Reservation => console.log(`Reservation created  ${date.name}`))
    .catch(err => console.log(err));
});

