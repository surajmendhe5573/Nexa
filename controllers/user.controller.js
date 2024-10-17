const User= require('../models/user.model');
const jwt= require('jsonwebtoken');
const bcrypt= require('bcrypt');
require('dotenv').config();
const authMessages= require('../helper/commonMessages');

// User SignUp
const singup= async(req, res)=>{
    try {
        const {username, email, password}= req.body;
        const userExist= await User.findOne({email});

        if(userExist){
            return res.status(401).json({message: authMessages.auth.userExists})
        }

        const hashedPassword= await bcrypt.hash(password, 10);

        const newUser= new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({message: authMessages.auth.signUpSuccess, newUser});  
    } catch (error) {
        console.log(error);
        
        res.status(500).json({message: 'Internal server error'})
    }
}

module.exports= singup;