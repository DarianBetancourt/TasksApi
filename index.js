const express = require("express")
const app = express()
const taskRoutes = require("./routes/task") //import routes for tasks
const swaggerUi = require('swagger-ui-express');
const { route } = require("./routes/task");
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.urlencoded({extended: false}))

//app.use("/tasks",taskRoutes)
app.use("/api/v1/tasks",taskRoutes)


app.listen(3000,()=>{console.log("servidor rodando na porta 3000")})