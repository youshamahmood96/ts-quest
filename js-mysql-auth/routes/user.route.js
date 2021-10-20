const { createUser, getUsers, getUsersById, updateUser, deleteUser, login } = require('../controllers/user.controller');
const { checkToken } = require('../middlewares/user.middleware');

const router = require('express').Router();
router.post('/user/create',checkToken,createUser)
router.get('/user/get',checkToken,getUsers)
router.get('/user/:id',checkToken,getUsersById)
router.post('/user/update',checkToken,updateUser)
router.delete('/user/delete',checkToken,deleteUser)
router.post('/user/login',login)

module.exports =router

// const pool = createPool({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     database: process.env.MYSQL_DATABASE,
//     password: process.env.MYSQL_PASSWORD,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });