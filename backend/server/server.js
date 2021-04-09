const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const morgan = require("morgan");
const app = new express();
require("dotenv").config();
const { login, signup } = require("../handlers/handlers");

const port = 8000;

app
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTION, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-with, Content-type, Accept"
    );
    next();
  })

  //XXXXXXXXXXXXX Middleware XXXXXXXXXXXXX

  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use(bodyParser.json())

  //XXXXXXXXXXXXX  Blizzard api XXXXXXXXXXXXX

  .get("/battle.net_access_token", async (req, res, next) => {
    const clientID = process.env.BNET_ID;
    const clientSecret = process.env.BNET_SECRET;
    const authString = Buffer.from(clientID + ":" + clientSecret).toString(
      "base64"
    );
    // body: JSON.stringify({ })
    const response = await fetch("https://us.battle.net/oauth/token", {
      method: "POST",
      grant_type: "client_credentials",
      headers: {
        Authorization: `Basic ${authString}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const json = await response.json();
    res.status(200).json(json);
  })

  //XXXXXXXXXXXXX REQUEST XXXXXXXXXXXXXXXX

  .post("/login", login)
  .post("/signup", signup)

  .get("*", (req, res) =>
    res.status(404).json({
      status: 404,
      message: "There is a problem with your request!",
    })
  )

  .listen(port, function (error) {
    if (error) {
      console.error(error);
    } else {
      console.log(`listening on port ${port}`);
    }
  });
