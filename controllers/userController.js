
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

const express = require('express');

exports.getAllUsers = catchAsync( async (req, res, next) => {
    const users = await User.find()

    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    });
});     

exports.createUser = (req, res) => {
     res.status(500).json({
        status: 'error',
        message: 'This route is not yet define'
    })
}

exports.getUser = (req, res) => {

}

exports.updateUser = (req, res) => {

}

exports.deleteUser = (req, res) => {

}