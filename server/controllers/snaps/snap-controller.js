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

        const receivers = await snapService.getReceivers(recepients)
        const populatedReceivers = [];

        receivers.forEach((receiver) => {
            populatedReceivers.push({
                receiver,
                isOpened: false
            })
        })

        const snapObject = {
            snap: `/uploads/${fileName}`,
            sender: req.user._id,
            recepients: populatedReceivers
        }

        const saveSnap = await snapService.createSnap(snapObject)

        if (saveSnap) {
            return res.status(201).json({ message: "wuhoo! Snap uploaded successfully!" })
        }

        return res.status(500).json({ err: "Db error..." })
    }

    async getAllSnaps(req, res) {
        const _id = req.user._id

        const snaps = await snapService.getSnaps({
            $or: [
                { sender: _id },
                { 'recepients.receiver._id': _id }
            ]
        })

        return res.status(200).json({ snaps })

    }

    async changeSnapStatus(req, res) {

        const { status, _id, receiverId } = req.body;

        const [snap] = await snapService.getSnaps({ _id })

        if (!snap) {
            return res.status(500).json({ err: "Snap not found" })
        }

        const receiver = snap.recepients.filter((rec) => { return rec.receiver._id.toString() === receiverId })
        if (!receiver.length) {
            return res.status(404).json({ err: "User not found" })
        }

        receiver[0].isOpened = status
        try {
            await snap.save()
            return res.status(200).json({ snap })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ err: "db error..." })
        }
    }

    deleteSnap(req, res) {
        snapService.deleteSnapAfterOpen(req.body.snap)
        return res.status(200).json({ message: "snap deleted successfully!" })
    }
}

module.exports = new SnapController()