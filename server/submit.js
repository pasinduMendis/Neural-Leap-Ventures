const mongoose = require("mongoose");
require("./customFunctions/userModel");
const User = mongoose.model("users");
const shortid = require("shortid");
const cookie = require('cookie');

exports.handler = async (event, context) => {

  console.log(event.body)
  const array = event.body.split("email=");
  const email = decodeURIComponent(array[1]);
  const myCookie = cookie.serialize('emailHash', email);
  console.log(email)
  console.log(array)

  try {
    console.log("*1")
    mongoose.connect("mongodb+srv://Neural-Leap-Ventures:Neural-Leap-Ventures@neural-leap-ventures.3ugshp3.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true,
    useUnifiedTopology: true, useFindAndModify: false});
    console.log("*2")
    const existingUser = await User.findOne({ email: email });
    console.log("*3")

    if (existingUser) {

    }

    if (!existingUser) {
      console.log("*4")
      const shortIdVariable = shortid.generate();
      console.log("*5")

      const user = await new User({
        email: email,
        referralId: shortIdVariable,
        numberOfReferrals: 0
      }).save();
    }
    mongoose.disconnect();

    return {
      statusCode: 302,
      headers: {
        "Location": "https://calm-tartufo-3b38f7.netlify.app/early-access",
        'Set-Cookie': myCookie
      },
      body: "Success",
    };

  } catch (err) {

    return {
      statusCode: 400,
      body: err,
    };

  }
};