const express = require('express');

const router = express.Router();




// Route Handler for User

const getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet define'
    })
}

const createUser = (req, res) => {
     res.status(500).json({
        status: 'error',
        message: 'This route is not yet define'
    })
}

const getUser = (req, res) => {

}

const updateUser = (req, res) => {

}

const deleteUser = (req, res) => {

}


router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router