const User = require("../models/user");
exports.getPosts = (req, res, next) => {
  // return an array of posts
  res.status(200).json();
};

exports.authentication = async (req, res, next) => {
  // get post's title and content from the request
  const username = req.body.username;
  const password = req.body.password;
  try {
    const result = await User.find({ username, password }).exec();
    if (result.length > 0) {
      res.status(200).json({});
    } else {
      res.status(401).json({});
    }
  } catch (error) {
    console.log(error);
  }

  // create a post with a dynamic Id with the current date
  // return a confirmation message with the created post object
};
