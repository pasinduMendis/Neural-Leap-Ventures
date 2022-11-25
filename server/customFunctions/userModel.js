const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    userId: String,
    email: String,
    referralId: String,
    numberOfReferrals: Number,
    referrals: [{ idOfReferral: String }],
});

var User=mongoose.model('Users', userSchema);
module.exports = User;