/* 
const User = require("./customFunctions/userModel");
const shortid = require("shortid");
const cookie = require('cookie');

exports.handler = async (event, context) => {
  console.log(event.body)
  const array = event.body.split("email=");
  const email = decodeURIComponent(array[1]);
  const myCookie = cookie.serialize('emailHash', email);

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {

    }

    if (!existingUser) {
      const shortIdVariable = shortid.generate();

      const user = await new User({
        email: email,
        referralId: shortIdVariable,
        numberOfReferrals: 0
      }).save();
    }

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
}; */
const User = require("./customFunctions/userModel");

exports.handler = async (event, context) => {
    const existingUser = await User.findOne({ email: "email" });
    console.log(event.body)
    return {
        statusCode: 200,
        body: "err",
      };
}