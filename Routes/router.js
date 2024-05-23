const express = require('express')
const userController = require('../Controllers/userController')
const transactionCtrl = require("../Controllers/transactionCtrl")
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

const router = new express.Router()

//register
router.post('/register',userController.register)

//login
router.post('/login',userController.login)

//add transaction
router.post('/addTransaction',jwtMiddleware,transactionCtrl.addTransaction);

//get all transaction
router.get('/getAllTransaction',jwtMiddleware,transactionCtrl.getAllTransaction)

//get user transaction
router.get('/getUserTransaction',jwtMiddleware,transactionCtrl.getUserTransaction)

//edit transaction
router.put('/editTransaction/:tid',jwtMiddleware,transactionCtrl.editTransaction)

//delete transaction
router.delete('/deleteTransaction/:tid',jwtMiddleware,transactionCtrl.deleteTransaction)



module.exports = router

