const { Table, ObjectId } = require('../bd');

const getAllTasksDB = async () => {
    return await Table.find();
}
const getTaskByIdDB = async (id) => {
    return await Table.findOne({ _id: new ObjectId(id) });
}

const createTaskDB = async (task) => {
    await Table.create(task)
    return await Table.find();
}

const updateTaskDB = async (id, data) => {
    await Table.updateOne({ _id: new ObjectId(id) }, { $set: data })
    return await Table.find();
}

const deleteTaskDB = async (id, data) => {
    await Table.deleteOne({ _id: new ObjectId(id) })
    return await Table.find();
}
module.exports = { getAllTasksDB, getTaskByIdDB, createTaskDB, updateTaskDB, deleteTaskDB }