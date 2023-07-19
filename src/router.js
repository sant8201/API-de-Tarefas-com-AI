const express = require('express')// Importa o módulo Express e o atribui à variável express.
const tasksController = require('./controllers/taskscontroller')// Importa o módulo taskscontroller e o atribui à variável tasksController.
const router = express.Router()// Cria uma nova instância de roteador do Express e a atribui à variável router.
router.get('/tasks', tasksController.getAll)// Define uma rota para a URL /tasks que chama o método getAll do controlador de tarefas quando uma solicitação GET é feita.
module.exports = router 
//37:38
//https://www.youtube.com/watch?v=Cdu0WJhI-d8&list=RDCMUC5QX7p9EavdNa2m25cITbzg&index=1&ab_channel=ManualdoDev