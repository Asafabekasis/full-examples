const router = require('express').Router();

function  Query(q){
    return new Promise ((resolve,reject)=>{
        db.query(q,(err,results)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(results)
            }
        })
    })
}

module.exports = router ;