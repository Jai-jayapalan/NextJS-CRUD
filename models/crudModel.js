const mongoose = require('mongoose')


const CrudSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const CrudModel = mongoose.models.crudModel ||  mongoose.model('crudModel', CrudSchema)

module.exports = CrudModel