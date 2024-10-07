const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require("bcrypt");
const { Op } = require('sequelize');

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
  Users.findAll();
});

router.post("/login", async (req, res) => {
  try {
    const { id, password } = req.body
    
    // Check if inputted id is the same in the db
    const user = await Users.findOne({ where: { id: id } });

    // Check if password is registered. Comparing hash to a input
    await bcrypt.compare(password, user.password).then((match) => {
      if(!match) res.json({ error: "Wrong Username/Password" });

      res.json("You're Logged In!");
    });
  } catch(error) {
    res.json({ error: "User Doesn't Exist" });
  }
});
module.exports = router; 