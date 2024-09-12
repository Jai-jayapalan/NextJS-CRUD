require('dotenv').config()
const mongoose = require('mongoose')

const mongoDbConnect = async() => {
    await mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to database successfully');
    })
    .catch((err)=>{
        console.log('Failed to connect to database' + err.message);
    })
}

module.exports = mongoDbConnect