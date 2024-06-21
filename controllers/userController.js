const User = require('../models/userModel')

const getUser = async (req, res) => {
    try {
        const Users = await User.find({});
        res.status(200).json(Users);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getUserByID = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await User.findById(id);
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await User.findByIdAndUpdate(id, req.body);

        if (!users) {
            res.status(404).json({ message: `cannot find any product with ID ${id}` });
        }
        const Updatedusers = await User.findById(id);
        res.status(200).json(Updatedusers);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await User.findByIdAndDelete(id);

        if (!users) {
            res.status(404).json({ message: `cannot find any product with ID ${id}` });
        }
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createUser = async (req, res) => {

    try {
        const users = await User.create(req.body)
        res.status(200).json(users);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getUser, getUserByID, updateUser, deleteUser, createUser
}