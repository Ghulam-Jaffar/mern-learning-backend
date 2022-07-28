const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler');
require("dotenv").config();

const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please provide all required fields')
    }

    const checkUserExists = await User.findOne({ email })

    if (checkUserExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateJWT(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('User could not be created')
    }

})

const getUserData = asyncHandler(
    async (req, res) => {
        const { _id, name, email } = await User.findById(req.user._id)
        res.status(200).json({
            id: _id,
            name,
            email
        })
    }
)

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateJWT(user._id)
        })

    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}

exports.registerUser = registerUser
exports.getUserData = getUserData
exports.loginUser = loginUser
exports.getAllUsers = getAllUsers