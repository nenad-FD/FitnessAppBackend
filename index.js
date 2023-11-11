import express from "express";
import cors from "cors";
import mysql from "mysql";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
import cookieParser from "cookie-parser";

//Ovo odvoji kasnije
import { Sequelize, DataTypes } from "sequelize";

//Users
// import users from "./models/users.cjs";
// import userController from "./controllers/user-controller.cjs";

const app = express();
// import db from "./models/index.cjs";

//Middleware
app.use(cors({ origin: "*" }));

//izdvoj ovo negde
let sequelize;
sequelize = new Sequelize("fitnessAppDB", "root", "mysqlfd5020", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

const Users = sequelize.define("Users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await Users.findAll();

    res.json(users);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "error" });
  }

  // res.json(users);
});

//---------------------------------------------------------------

// //middleware

// app.use(express.json());

// app.use(cookieParser());

// //Ovo mi treba

// app.use("/api/users", userController);

app.listen(3001, () => {
  console.log("Server has started on port 3001");
});
