const express = require('express');
const connect = require("./Connect/connect")
const {signUp, login} = require("./Controllers/users.controllers")
// const userRouter = require('./routes/userRouter')
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json())
app.get('/',  (req,res) => {
    res.send('hii this is Hardeep')
})

// app.post('/signup', (req,res) => {
//    const body = req.body.name;
//    console.log(body)
// })

app.post('/signup',  async (req,res) => {
   const body =  await req.body;
    try{
        let data =await signUp(body);
         res.send({
            data:data
        })
    }catch(err){
        res.status(500).send({
            err:err.message
        })
    }
}
)

app.post('/login', async(req,res) => {
    const body = req.body;
    try {
        let data = await login(body);
        res.status(200).send({
            data: data
        })
    } catch (error) {
        res.status(500).send({
            err:error.message
        })
    }
})

connect()
.then(() => {
   app.listen(3004, () => {console.log("Server started as well as connected on http://localhost:3004/")})
})
.catch((err) => {
   console.log("Connection denied due to some error");
})