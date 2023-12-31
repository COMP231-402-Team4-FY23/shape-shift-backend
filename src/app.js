const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
const loginRoutes = require("./routes/login");
const RegisterRoutes = require("./routes/register");
const UsersRoutes = require("./routes/user");
app.use("/api", loginRoutes);
app.use("/api", RegisterRoutes);
app.use("/api", UsersRoutes);
mongoose
  .connect(
    "mongodb+srv://shape:aBcycxTwn2hMaT2u@cluster0.d4bzqay.mongodb.net/shapedb?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Mongoose ${result}`);
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log("err", err));

module.exports = app;
