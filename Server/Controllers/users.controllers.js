const userModel = require('../Connect/users')

 const signUp = async (body) => {
    let user = await userModel.findOne({email : body.email})

    if(user){
        throw new Error("Email Already Registered");
    }

    let newUser = await userModel.create(body);
    return "Sucessfully Sign Up";
}

const login = async(body) => {
    const user = await userModel.findOne({ email: body.email });

    if(!user){
        throw new Error("User Not Found");
    }
    let password = body.password;
    if(user.password !== password){
        throw new Error("Password is incorrect");
    }
}

module.exports = {signUp,login}