const express = require('express');
const router = express.Router();
const User = require('../models/userModel')
const { getUser, getUserByID, updateUser, deleteUser, createUser } = require('../controllers/userController')


router.get('/', getUser)

router.get('/:id', getUserByID)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

router.post('/', createUser)

module.exports = router;