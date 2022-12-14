const { Schema, model } = require('mongoose')

const smsSchema = new Schema({
    recipients: { type: Array, required: true },
    message: { type: String, required: true },
    sender: { type: String },
}, { timestamps: true })

module.exports = model('Sms', smsSchema)