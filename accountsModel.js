const mongoose = require('mongoose');

const accountsModelSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"]
        },
        number: {
            type: Number,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Responce = mongoose.model('accounts', accountsModelSchema);

module.exports = Responce;