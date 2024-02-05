const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const task = require('./controller/task.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swager.json');

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/task', task);

app.use((err, req, res, _next) => res.send(err.message))

module.exports = app