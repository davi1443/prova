const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            userNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB is connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;