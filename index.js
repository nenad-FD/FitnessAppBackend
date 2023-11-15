const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users-routes.cjs");

const app = express();
app.use(express.json());

//Middleware
app.use(cors({ origin: "*" }));

app.use("/api/users", userRouter);

app.listen(3001, () => {
  console.log("Server has started on port 3001");
});
