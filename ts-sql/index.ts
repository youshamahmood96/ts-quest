import { PrismaClient } from '@prisma/client';
import express, { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator'


const prisma = new PrismaClient()

const app = express()

app.use(express.json())

const userValidationRules = [
  body('email')
    .isLength({ min: 1 })
    .withMessage('Email must not be empty')
    .isEmail()
    .withMessage('Must be a valid email address'),
  body('name').isLength({ min: 1 }).withMessage('Name must not be empty'),
  body('role')
    .isIn(['ADMIN', 'USER', 'SUPERADMIN', undefined])
    .withMessage(`Role must be one of 'ADMIN', 'USER', 'SUPERADMIN'`),
]

const simpleVadationResult = validationResult.withDefaults({
  formatter: (err) => err.msg,
})

const checkForErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = simpleVadationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.mapped())
  }
  next()
}


//create
app.post('/users', userValidationRules, checkForErrors, async (req: Request, res: Response) => {
  const { name, email, role } = req.body
  try {
    const existingUser = await prisma.user.findFirst({ where: { email } })
    if (existingUser) throw { email: 'Email already exists' }
    const user = await prisma.user.create({
      data: { name, email }
    })

    return res.json(user)
  } catch (err) {
    console.log(err)
    return res.status(400).json(err)
  }
})

// get

app.get('/getUsers',)

app.listen(8000,()=>{
  console.log('ok');
})



// await prisma.user.create({
//   data: {
//     name: 'Alice',
//     email: 'alice@prisma.io',
//     posts: {
//       create: { title: 'Hello World' },
//     },
//     profile: {
//       create: { bio: 'I like turtles' },
//     },
//   },
// })

// const allUsers = await prisma.user.findMany({
//   include: {
//     posts: true,
//     profile: true,
//   },
// })
// console.dir(allUsers, { depth: null })


//   .catch((e) => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })