const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const assert = require("assert");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getUser = async (req, res) => {
  const { userId } = req.body;
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("hsdatabase");
    const user = await db.collection("users").findOne({ _id: userId });
    client.close();
    if (!user) {
      return res.status(404).json({
        status: 404,
        error: "User not found.",
      });
    }

    return res.status(200).json({
      status: 200,
      userId: user._id,
      user,
    });
  } catch (err) {
    console.log(err.stack);
    client.close();

    return res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("hsdatabase");
    const user = {
      // _id: uuidv4(),
      name,
      email,
      password: hashPassword,
    };
    const result = await db.collection("users").insertOne(user);
    assert.equal(1, result.insertedCount);
    client.close();
    if (result.insertedCount === 1) {
      return res.status(201).json({
        status: 201,
        message: "User added.",
        user,
      });
    } else {
      return res.status(400).json({
        status: 400,
        error: "Input not accepted.",
      });
    }
  } catch (err) {
    console.log(err.stack);
    client.close();
    return res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("hsdatabase");
    const user = await db.collection("users").findOne({ email });
    client.close();
    if (!user) {
      return res.status(404).json({
        status: 404,
        error: "Sign up first.",
      });
    }
    const passwordIsValidated = await bcrypt.compare(password, user.password);
    if (!passwordIsValidated) {
      return res.status(401).json({
        status: 401,
        error: "Password is incorrect.",
      });
    } else {
      return res.status(201).json({
        status: 201,
        message: "Logged in",
        userId: user._id,
        user,
      });
    }
  } catch (err) {
    console.log(err.stack);
    client.close();
    return res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

module.exports = {
  login,
  signup,
  getUser,
};
