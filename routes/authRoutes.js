const express = require('express');
const routes = express.Router();
const User = require('../model/User');
const jwt = require('json-web-token')


routes.post('/signup',async(req,res)=>{
    const body = req.body;
    try{
        console.log(user);
        const user = await User.insertMany(body);
        const token = jwt.sign(user.email);
        res.status(201).json({
            user,
            token
        })
    }
    catch(e)
    {
        return res.status(400).json({
            message:"Server Error",
            err:e.message
        })
    }
})

routes.post('/signin',async(req,res)=>{
    const body = req.body;
    try{
        const data = await User.findOne({
            email:body.email
        });
        if(data.password == body.password){
            const token = jwt.sign(data.email);
            return res.status(201).json({
                message:"Sign In Successfully",
                token
            })
        }
        return res.status(403).json({
            message:"Wrong Password"
        })
    }
    catch(e){
        return res.status(400).json({
            message:"Server Error"
        })
    }
})


module.exports = routes;