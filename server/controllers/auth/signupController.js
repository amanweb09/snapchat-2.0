const tokenService = require("../../services/token-service");
const userService = require("../../services/user-service")
const { accessSecret, hashsecret } = require('../../env');
const hashingService = require("../../services/hashing-service");

class SignupController {

    async signupUser(req, res) {
        const { name,
            birthday,
            bitmoji,
            username,
            email,
            password } = req.body

        if (!name || !birthday || !bitmoji || !username || !email || !password) {
            return res.status(400).json({ err: 'All fields are required!' })
        }

        const checkUsername = await userService.findUser({ username })
        if (checkUsername) {
            return res.status(400).json({ err: 'username is already taken!' })
        }

        const checkEmail = await userService.findUser({ email })
        if (checkEmail) {
            return res.status(400).json({ err: 'User already exists with this email!' })
        }

        const { firstName, lastName } = name
        const nameString = `${firstName} ${lastName}`
        const hashedPwd = hashingService.hash(password, hashsecret)

        const user = {
            ...req.body,
            name: nameString,
            password: hashedPwd
        }

        const saveUser = await userService.createUser(user)

        if (saveUser) {
            const at = tokenService.generateToken({ _id: saveUser._id}, accessSecret)
            res.cookie('at', at, {
                httpOnly: true
            })
            return res.status(201).json({ user, isAuth: true })
        }

        return res.status(500).json({ err: 'Something went wrong!' })
    }

}

module.exports = new SignupController()