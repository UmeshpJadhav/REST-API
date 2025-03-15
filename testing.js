const bcrypt = require("bcrypt");


function hashedPassword(password){
         bcrypt.genSalt(10 , function(err, salt){
            bcrypt.hash(password ,10,  function(err, password){
           return hashed; 
            })
         })
}

module.exports = hashedPassword;