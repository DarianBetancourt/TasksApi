const express = require("express")
const router = express.Router()
const modelTask = require("../models/task")
const { Sequelize,DataTypes } = require('sequelize');
const sequelize = new Sequelize({dialect: 'sqlite',storage: 'task.db'});
const Task = modelTask(sequelize,DataTypes)

/* all tasks */
router.get("/",async(req,res)=>{
 const tasks = await Task.findAll() 
    res.json(tasks)
})
/*Add New Task */
router.post("/",async(req,res,next)=>{
    req.task = new Task()
    next()    
},save_edit())

/* simplificando routes */
router 
.route("/:id")
.get(async(req,res)=>{
    const task = await Task.findByPk(req.params.id);
    if (task === null){
        res.status(404).send("ups..! tarefa nao existe")
    }
    else{
        res.json(task)
    }
})
.put(async(req, res,next)=> {
    req.task = await Task.findByPk(req.params.id)
    next()
},save_edit())
.delete((req, res) => {
    Task.destroy({ where: { id: req.params.id }});
    res.send(`task de ID ${req.params.id} Excluida`)
})  

function save_edit() {
    return async (req, res) => {
        let task          = req.task
        task.description  = req.body.description
        task.done         = req.body.done
        try { 
            const saved = await task.save();
            res.send(`tarefa salvada con sucesso`)
        } catch(error){
            console.log(error)
            res.send("ups..! ocurrio un error")
        }
      }
}


module.exports = router;