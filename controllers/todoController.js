const asyncHandler=require("express-async-handler");
const userModel =require("../models/todoSchema.js")

const getTodo=asyncHandler(async(req,res)=>{
    try{
        const getTodos= await userModel.find();
        res.status(201).json(getTodos);
    }
    catch(err){
        res.status(401).json({error:err.message});
        // throw new Error("")
    }
});
const createTodo=asyncHandler(async(req,res)=>{
    try {
        const { Description }=req.body;
        console.log(Description);
        console.log("create",req.body);
        if(!Description){
            // res.status(404).json("empty field");
            throw new Error("All fields are Mandatory");
        }
        const newTodo= await userModel.create({ Description });
        res.status(201).json(newTodo);   

    } catch (err) {
        res.status(404).json({error:err.message}); 
    }
    

});

const updateTodo=asyncHandler(async(req,res)=>{
    try {
        const _id=req.params.id;
        const todo=await userModel.findById(req.params.id);
        const { Description }=req.body;
        if(!todo){
            res.status(404);
            throw new Error("todo task not found");
        }
        const updatetodo= await userModel.findByIdAndUpdate(_id,{Description},{new:true});
        // console.log(Description,updatetodo);
        const response= await userModel.find();
        res.status(201).json(response);

    } catch (err) {
        res.status(403).json({error:err.message}); 
    }
});


const deleteTodo=asyncHandler(async(req,res)=>{
    try {
        const {_id}=req.params.id;
        const todo=await userModel.findById(req.params.id);
        if(!todo){
            res.status(404);
            throw new Error("todo task not found");
        }

        const deletetodo= await userModel.findByIdAndDelete(req.params.id);
        if(!deleteTodo){
            res.status(403).json({message:"No todo card found"});
            return;
        }
        const response= await userModel.find();
        res.status(201).json(response);
    } catch (err) {
        res.status(403).json({error:err.message}); 
    }
});


module.exports={getTodo,updateTodo,deleteTodo,createTodo};
