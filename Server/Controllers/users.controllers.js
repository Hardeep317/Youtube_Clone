const userModel = require('../Connect/users')

 const signUp = async (body) => {
    let user = await userModel.findOne({email : body.email})

    if(user){
        throw new Error("Email Already Registered");
    }

    let newUser = await userModel.create(body);
    return "Sucessfully Sign Up";
}

module.exports = {signUp}