const express = require("express");
const router = express.Router();
const { register, login, token, logout } = require("../controllers/userController");
const { authenticateRefreshToken } = require("../middleware/authenticate");

router.post('/register', register);
router.post('/login', login);
router.post('/token', authenticateRefreshToken ,token);
router.post('/logout', authenticateRefreshToken ,logout)

module.exports = router