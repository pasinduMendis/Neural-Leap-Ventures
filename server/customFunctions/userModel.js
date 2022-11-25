var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Neural-Leap-Ventures:Neural-Leap-Ventures@neural-leap-ventures.3ugshp3.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true,
  useUnifiedTopology: true, useFindAndModify: false});
var Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: String,
    email: String,
    referralId: String,
    numberOfReferrals: Number,
    referrals: [{ idOfReferral: String }],
});

var User=mongoose.model('Users', userSchema);
module.exports = User;