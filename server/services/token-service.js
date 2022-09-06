// const Users = require('../models/user')
const { sign, verify } = require('jsonwebtoken')

class TokenService {

    generateToken(payload, secret) {
        return sign(payload, secret, {
            expiresIn: '2d'
        })
    }

    verifyToken(token, secret) {
        return verify(token, secret, (err, payload) => {
            if(err) return err

            return payload
        })
    }

}

module.exports = new TokenService()