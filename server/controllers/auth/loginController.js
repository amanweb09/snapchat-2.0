const tokenService = require("../../services/token-service");
const userService = require("../../services/user-service")
const { accessSecret, hashsecret } = require('../../env');
const hashingService = require("../../services/hashing-service");

class SignupController {

    refreshUser(req, res) {
        return res.status(200).json({ user: req.user, isAuth: true })
    }

    async loginUser(req, res) {
        const { emailOrUsername, password } = req.body

        if (!emailOrUsername || !password) {
            return res.status(400).json({ err: 'All fields are required!' })
        }

        const user = await userService.findUser({
            $or: {
                username: emailOrUsername,
                email: emailOrUsername
            }
        })

        if (!user) {
            return res.status(404).json({ err: 'user not found!' })
        }

        const hashedPwd = hashingService.hash(password, hashsecret)

        if (hashedPwd !== user.password) {
            return res.status(401).json({ err: 'Invalid credentials!' })
        }

        const at = tokenService.generateToken({ _id: user._id }, accessSecret)
        res.cookie('at', at, {
            httpOnly: true
        })

        return res.status(200).json({ user, isAuth: true })
    }

    logout(req, res) {
        res.clearCookie('at')
        return res.status(200).json({ user: null, isAuth: false })
    }

}

module.exports = new SignupController()