const User = require("../models/user");
exports.users = async (req, res, next) => {
  try {
    const result = await User.find({});

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
