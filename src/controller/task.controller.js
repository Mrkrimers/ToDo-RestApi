const route = require('express').Router();
const { buildResponse } = require('../helper/buildResponse');
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask } = require('../service/task.service')

route.get('/', async (req, res) => {
    try {
        buildResponse(res, 200, await getAllTasks())
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.get('/:_id', async (req, res) => {
    try {
        buildResponse(res, 200, await getTaskById(req.params._id))
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.post('/', async (req, res) => {
    try {
        buildResponse(res, 200, await createTask(req.body))
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.put('/:_id', async (req, res) => {
    try {
        buildResponse(res, 200, await updateTask(req.params._id, req.body))
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.delete('/:_id', async (req, res) => {
    try {
        buildResponse(res, 200, await deleteTask(req.params._id))
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

module.exports = route;