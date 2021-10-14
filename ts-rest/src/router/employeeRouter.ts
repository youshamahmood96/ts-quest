import express from 'express'
import { addEmployee, deleteEmployee, getAllEmployees } from '../controller/employeeController'

const router = express.Router()

const routing = async () => {
    await router.post('/addEmployee',addEmployee)
    await router.get('/getAllEmployee',getAllEmployees)
    await router.delete('/deleteEmployee/:id',deleteEmployee)

}

routing()
export default router
