const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login");

router.get("/login");
router.post("/login", loginController.authentication);

module.exports = router;
