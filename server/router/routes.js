const router = require('express').Router()


const loginController = require('../controllers/auth/loginController')
const signupController = require('../controllers/auth/signupController')
const snapController = require('../controllers/snaps/snap-controller')
const userController = require('../controllers/user/user-controller')
const authenticate = require('../middleware/authenticate')

router.post('/signup', signupController.signupUser)
router.post('/login', loginController.loginUser)
router.get('/refresh', authenticate, loginController.refreshUser)
router.post('/logout', authenticate, loginController.logout)

router.get('/users/all', authenticate, userController.getAllUsers)

router.post('/snap/create', authenticate, snapController.uploadSnap)

module.exports = router