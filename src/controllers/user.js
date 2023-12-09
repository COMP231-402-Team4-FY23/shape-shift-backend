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
    if (result.deletedCount === 1) {
      res.status(204).json({});
    } else {
      res.status(400).json({});
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
