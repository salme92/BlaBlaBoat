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
        Name: 'Viaje Valencia a Ibiza',
        Date: Date.now(),
        Prize: 150
    },
    {  
        Name: 'Viaje a Pachá Las Palmas',
        Date: new Date(2018,09,23),
        Prize: 99.95
    },
    {  
        Name: 'Viaje desde el Manzanares hasta Nueva York',
        Date: new Date(201,12,31),
        Prize: 50
    },
];

Reservation.collection.drop();

date.forEach(p => {
    let pr = new Reservation (p);
    pr.save()
    .then(Reservation => console.log(`Reservation created  ${date.name}`))
    .catch(err => console.log(err));
});

