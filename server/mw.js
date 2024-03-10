const jwt = require("jsonwebtoken")

const onlyUsers=(req,res,next)=>{
            res.send('aaaaaa')
            next()

 };

 module.exports = {onlyUsers}