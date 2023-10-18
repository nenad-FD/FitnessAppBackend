import express from "express";
import cors from "cors";
import mysql from "mysql";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
import cookieParser from "cookie-parser";

const salt = 10;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use(cookieParser());

import db from "./models/index.cjs";
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server has started on port 5000");
  });
});

//Ovo je drugi video, iznad je prvi video, znaci ne mozemo i jedno i drugo (verovatno)
/* const db = mysql.createConnection({
  host: "localhos",
  user: "root",
  password: "",
  database: "fitnessDB",
}); */

// app.post("/register", (req, res) => {
//   const sql = "INSERT INTO login (`fullname`, `email`, `password`) VALUES (?)";
//   bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
//     if (err) return res.json({ Error: "Error for hasing password" });
//     const values = [req.body.fullname, req.body.email, hash];

//     db.query(sql, [values], (err, result) => {
//       if (err) return res.json({ Error: "Inserting Data Error in server" });
//       return res.json({ Status: "Success" });
//     });
//   });
// });
