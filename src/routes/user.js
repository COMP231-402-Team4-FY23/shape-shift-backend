const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");

router.get("/users", UserController.users);
router.delete("/user/:id", UserController.delete);

module.exports = router;
