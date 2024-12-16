const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const { sign } = require("jsonwebtoken");

// input to db
router.post("/", async (req, res) => {
  const { id, username, email, password } = req.body;
  await bcrypt.hash(password, 12).then((hash) => {
    Users.create({
      id: id,
      username: username,
      email: email,
      password: hash,
    });

    res.json("Success");
  });
});

router.get("/", async (req, res) => {
  const users = await Users.findAll();
  res.json(users);
});

router.post("/login", async (req, res) => {
  const { id, password } = req.body;

  const user = await Users.findOne({ where: { id: id } }); // Check if inputted id is the same in the db

  if (!user) return res.status(404).json({ error: "User doesn't exist" });

  // Check if password is registered. Comparing hash to a input
  await bcrypt.compare(password, user.password).then((match) => {
    if (!match) return res.status(401).json({ error: "Wrong ID/Password" });

    // Generate the JWT
    const accessToken = sign(
      { username: user.username, id: user.id },
      "importantSecret",
      { expiresIn: "2h" }
    );

    res.json({ accessToken, success: true }); // Sends a success: true flag with the access token for successful logins.
  });
});
module.exports = router;
