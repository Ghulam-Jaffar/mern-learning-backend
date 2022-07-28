const express = require('express');
const router = express.Router();

const { getUserData, registerUser, loginUser, getAllUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.get('/getUser', protect, getUserData);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getAllUsers', getAllUsers);

module.exports = router;