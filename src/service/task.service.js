const { getAllTasksDB, getTaskByIdDB, createTaskDB, updateTaskDB, deleteTaskDB } = require('../repository/task.repository')

const getAllTasks = async () => {
    return await getAllTasksDB();
}

const getTaskById = async (id) => {
    return await getTaskByIdDB(id);
}

const createTask = async (task) => {
    return await createTaskDB(task);
}

const updateTask = async (id, data) => {
    return await updateTaskDB(id, data);
}

const deleteTask = async (id) => {
    return await deleteTaskDB(id);
}

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask }