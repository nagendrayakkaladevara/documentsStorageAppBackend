const mongoose = require('mongoose');

const responceModelSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a Title"]
        },
        discription: {
            type: String,
            required: false
        },
        link: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        related: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Responce = mongoose.model('responce', responceModelSchema);

module.exports = Responce;