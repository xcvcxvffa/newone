const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/authRoute");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

mongoose
  .connect("mongodb://localhost:27017/loginsystem")
  .then(() => {
    console.log("mongoDb is connect successfully");
  })
  .catch((error) => {
    console.error("failed the connection", error);
  });
app.use((err, req, res, next) => {
  err.statuCode = err.statuCode || 500;
  err.status = err.status || "error";

  res.status(err.statuCode).json({
    status: err.status,
    message: err.message,
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`APP is running is port no ${PORT}`);
});
