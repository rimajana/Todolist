const express = require('express');
const router = express.Router();

const {getTodo,updateTodo,deleteTodo,createTodo} =require("../controllers/todoController.js");

router.get("/",getTodo).post("/",createTodo);
router.put("/:id",updateTodo).delete("/:id",deleteTodo);

module.exports=router;
