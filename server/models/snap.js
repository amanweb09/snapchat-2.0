const { Schema, model } = require('mongoose')

const snapSchema = new Schema({
    
    snap: {
        type: String,
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        unique: false   
    },
    recepients: [
        {
            receiver: {
                type: Schema.Types.ObjectId,
                ref: 'users',
                unique: false 
            },
            isOpened: {
                type: Boolean,
                default: false
            }
        }
    ]

}, {
    timestamps: true
})

module.exports = new model('snaps', snapSchema, 'snaps')