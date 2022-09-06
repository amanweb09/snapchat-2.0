const router = require('express').Router()


const loginController = require('../controllers/auth/loginController')
const signupController = require('../controllers/auth/signupController')
const authenticate = require('../middleware/authenticate')

router.post('/signup', signupController.signupUser)
router.post('/login', loginController.loginUser)
router.get('/refresh', authenticate, loginController.refreshUser)

module.exports = router