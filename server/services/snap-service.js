const Snaps = require("../models/snap")
const userService = require('./user-service')
const fs = require('fs')
const path = require('path')

class SnapService {

    async createSnap(snapObject) {
        try {
            return await Snaps.create(snapObject)

        } catch (error) {
            console.log(error);
            return error
        }
    }

    async getSnaps(filter) {
        try {
            return await Snaps
                .find(filter)
                .sort({ createdAt: -1 })
                .populate('recepients')
                .populate('sender')
                .exec()

        } catch (error) {
            console.log(error);
            return error
        }
    }

    async getReceivers(userArr) {
        try {
            return await userService.findUsers({ $in: userArr })
        } catch (err) {
            return err
        }
    }

    deleteSnapAfterOpen(fileName) {
        const filePath = path.resolve(__dirname, `../${fileName}`)
        return fs.unlinkSync(filePath)
    }

}

module.exports = new SnapService()