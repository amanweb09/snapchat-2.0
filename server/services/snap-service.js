const Snap = require("../models/snap")

class SnapService {

    async createSnap(snapObject) {
        try {
            return await Snap.create(snapObject)
            
        } catch (error) {
            console.log(error);
            return error
        }
    }

}

module.exports = new SnapService()