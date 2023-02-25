// const mongoose = require('mongoose');

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
// async function connect(){
//     return new Promise((resolve, reject) => {
//         // mongoose.connect('mongodb+srv://hardeep:hardeep@317@cluster0.wsde2lf.mongodb.net/?retryWrites=true&w=majority',connectionParams)
//         // mongoose.connect('mongosh "mongodb+srv://cluster0.clh65fv.mongodb.net/youtube" --apiVersion 1 --username hardeep')
        
//         mongoose.connect('mongodb+srv://<credentials>@cluster0.clh65fv.mongodb.net/youtube?appName=mongosh+1.6.1')
//         .then(res=>{
            
//             resolve('Connected')
//         })
//         .catch((err)=>{
//             console.log(err.message);
//             reject('Not Connected')
//         })
//     })
// }

// module.exports = connect;

// const connect = async () => {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/youtube")
//         .then(() => {console.log("mongodb connected")})
        
        
//     }
//     catch (error){
//         console.log("mongodb connect error", error)
//     }

// }


const mongoose = require('mongoose');

async function connect(){
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://127.0.0.1:27017/youtube',connectionParams,(err) => {
            if(err){
                return reject(err);
            }
        })
        resolve();
    })
}

module.exports = connect;
