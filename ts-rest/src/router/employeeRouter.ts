import express from 'express'

import { addEmployee, deleteEmployee, getAllEmployees,updateEmployee } from '../controller/employeeController'

const router = express.Router()

const routing = async () => {
    await router.post('/addEmployee',addEmployee)
    await router.get('/getAllEmployee',getAllEmployees)
    await router.delete('/deleteEmployee/:id',deleteEmployee)
    await router.patch('/updateEmployee/:id',updateEmployee)
}

routing()
export default router
