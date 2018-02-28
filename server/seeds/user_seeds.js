require('dotenv').config();
const mongoose = require('mongoose');
const dbURL = process.env.dbURL
const User = require('../models/User');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

mongoose.connect('mongodb://localhost/Project-M3_Boats')
.then(() => console.log("Conectado!")
.catch(err=>console.log(err)));

let salt = bcrypt.genSaltSync(bcryptSalt);

const user = [{
    username : 'Alberto_Salmerón',
    password : bcrypt.hashSync("1234", salt),
    imageProfile: 'http://via.placeholder.com/350x150',
    Valoration: 5,
    role: {type: 'Capitan'}
},
{
    username : 'Prueba1',
    password : bcrypt.hashSync("1234", salt),
    imageProfile: 'http://via.placeholder.com/350x150',
    Valoration: 2,
    role: 'Cliente',
},
{
    username : 'Salme',
    password : bcrypt.hashSync("1234", salt),
    imageProfile: 'http://via.placeholder.com/350x150',
    Valoration: 4,
    role: 'Capitan'
},
{
    username : 'Pepito_Rodriguez',
    password : bcrypt.hashSync("1234", salt),
    imageProfile: 'http://via.placeholder.com/350x150',
    Valoration: 3,
    role: 'Cliente',
    
},
];

User.collection.drop();

user.forEach(p => {
    let pr = new User(p);
    console.log(p.role);
    pr.save()
    .then(User => console.log(`User created  ${user.name}`))
    .catch(err => console.log(err));
});

