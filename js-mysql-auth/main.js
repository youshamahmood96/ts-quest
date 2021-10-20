const express = require("express");
const router = require("./routes/user.route");
const app = express();
const main = async () => {
  app.use(express.json());
  await app.use("/api", router);
  await app.listen(3000, () => {
    console.log("listening on port 3000");
  });
};
module.exports = main
