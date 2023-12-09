const User = require("../models/user");

exports.register = async (req, res, next) => {
  // get post's title and content from the request
  const username = req.body.username;
  const password = req.body.password;
  try {
    var new_user = new User({ username, password });
    const result = await new_user.save();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(401).json({});
    }
  } catch (error) {
    console.log(error);
  }
};
