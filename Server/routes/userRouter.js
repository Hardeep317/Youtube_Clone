// const express = require('express');
// // const User = require("../Connect/users");
// const {signUp} = require('../Controllers/users.controllers')

// const router = express.Router();

// router.post('/signup', async (req,res) => {
//     let body = req.body;
//     console.log(body)
//     try{
//         let data =await signUp(body);
//         res.send({
//             data:data
//         })
//     }catch(err){
//         res.status(500).send({
//             err:err.message
//         })
//     }
// })

// module.exports = router