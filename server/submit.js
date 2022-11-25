const mongoose = require("mongoose");
const User = require("./customFunctions/userModel");
//const shortid = require("shortid");
const cookie = require('cookie');

exports.handler = async (event, context) => {
  console.log(event.body)
  const array = event.body.split("email=");
  const email = decodeURIComponent(array[1]);
  const myCookie = cookie.serialize('emailHash', email);

  try {
    mongoose.connect("mongodb+srv://Neural-Leap-Ventures:Neural-Leap-Ventures@neural-leap-ventures.3ugshp3.mongodb.net/?retryWrites=true&w=majority");
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {

    }

    if (!existingUser) {
      //const shortIdVariable = shortid.generate();

      const user = await new User({
        email: email,
        referralId: "shortIdVariable",
        numberOfReferrals: 0
      }).save();
    }
    mongoose.disconnect();

    return {
      statusCode: 302,
      headers: {
        "Location": "https://breakpoints.ai/early-access",
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

