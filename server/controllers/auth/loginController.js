const tokenService = require("../../services/token-service");
const userService = require("../../services/user-service")
const { accessSecret } = require('../../env')

class SignupController {

    refreshUser(req, res) {
        return res.status(200).json({ user: req.user, isAuth: true })
    }

    loginUser(req, res) {
        const { emailOrUsername, passsword } = req.body
    }

}

module.exports = new SignupController()