const express = require('express')
const routes = express.Router();
const blog = require('../model/Blog');

routes.post('/create',async(req,res)=>{
    const body = req.body;
    try{
        const newBLog = blog.create(body);
        return res.status(201).json({
            message:"Blog Created",
            blog:newBLog
        })
    }
    catch(err)
    {
        return res.status(401).json({
            message:"server issue"
        })
    }
});

routes.get('/get:id',async(req,res)=>{
    const id = req.params.id;
    try{
        const bl = blog.findById(id);
        return res.status(201).json({
            blog:bl
        })
    }
    catch(err)
    {
        return res.status(403).json({
            message:"server issue"
        })
    }

})

routes.get("/getAll",async(req,res)=>{
    try{
        const blogs = await blog.find();
        return res.status(201).json({
            blogs
        })
    }
    catch(err)
    {
        return res.status(403).json({
            message:"server issue"
        })
    }
})

routes.delete('/delete',async(req,res)=>{
    const body = req.body;
    try{
        const delte = await blog.deleteOne({
            title:body.title
        })
        return res.status(201).json({
            message:"Deleted Successfulyy",
            blog:delte
        })
    }
    catch(err)
    {
        return res.status(403).json({
            message:"Server Issue"
        })
    }
})


module.exports = routes;