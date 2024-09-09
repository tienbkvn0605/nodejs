// employee.routes.js
const express = require('express')

const router = express.Router()

const employeeController =   require('../controllers/employee.controller');

// Get all employees
router.get('/', employeeController.getAll);
// company info
router.get('/id=:id', employeeController.getComInfo);
// add new prject
router.post('/createnew', employeeController.createNew);
// delete item
router.post('/admin/deleteItem', employeeController.delItem);

module.exports = router
