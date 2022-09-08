const Jimp = require('jimp')
const path = require('path')
const snapService = require('../../services/snap-service')

class SnapController {

    async uploadSnap(req, res) {
        const { snap, recepients } = req.body

        if (!snap || !recepients) {
            return res.status(400).json({ err: 'all fields are required' })
        }

        const snapBase64 = snap.replace(/^data:image\/(jpeg|jpg|png);base64,/, '')
        const buffer = Buffer.from(snapBase64, 'base64')
        const fileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}.jpeg`

        try {
            const readBuffer = await Jimp.read(buffer)
            readBuffer
                .write(path.resolve(__dirname, `../../uploads/${fileName}`))
        } catch (error) {
            console.log(error);
            return res.status(500).json({ err: "Couldn't process your snap :(" })
        }

        const snapObject = {
            snap: `/upload/${fileName}`,
            sender: req.user._id,
            recepients
        }

        const saveSnap = await snapService.createSnap(snapObject)

        if(saveSnap) {
            return res.status(201).json({ message: "wuhoo! Snap uploaded successfully!" })
        }

        return res.status(500).json({ err: "Db error..." })
    }

}

module.exports = new SnapController()