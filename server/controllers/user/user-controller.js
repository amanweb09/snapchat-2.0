const userService = require("../../services/user-service")

class UserController {

    async getAllUsers(req, res) {

        const users = await userService.findUsers()
        
        if(users) {
            return res.status(200).json({ users })
        }

        return res.status(500).json({ err: "db error..." })
    }

}

module.exports = new UserController()