const express = require('express');
const connect = require("./Connect/connect")
const {signUp} = require("./Controllers/users.controllers")
// const userRouter = require('./routes/userRouter')
const cors = require("cors")

const app = express();
app.use(cors())
app.get('/',  (req,res) => {
    res.send('hii this is Hardeep')
})

app.post('/signup', async (req,res) => {
   let body = req.body;
    console.log(body)
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
}
)

connect()
.then(() => {
   app.listen(3004, () => {console.log("Server started as well as connected on http://localhost:3004/")})
})
.catch((err) => {
   console.log("Connection denied due to some error");
})