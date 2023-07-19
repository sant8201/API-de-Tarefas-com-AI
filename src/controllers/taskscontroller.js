const tasksModel = require("../models/task.model")

const getAll = async (req, res)=>{
    const tasks = await tasksModel.getAll();
    return res.status(201).json(tasks)
}
module.exports = {
    getAll
}

//47:44