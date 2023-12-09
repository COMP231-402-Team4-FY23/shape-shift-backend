const User = require("../models/user");

exports.authentication = async (req, res, next) => {
  // get post's title and content from the request
  const username = req.body.username;
  const password = req.body.password;
  try {
    const result = await User.find({ username, password }).exec();
    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(401).json({});
    }
  } catch (error) {
    console.log(error);
  }
};
