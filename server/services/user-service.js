const Users = require('../models/user')

class UserService {

    async findUser(filter) {
        try {
            return await Users.findOne(filter)
        } catch (error) {
            return error
        }
    }

    async findUsers(filter) {
        try {
            return await Users.find(filter)
        } catch (error) {
            return error
        }
    }

    async createUser(user) {
        try {
            return await Users.create(user)
        } catch (error) {
            return error
        }
    }

}

module.exports = new UserService()