const express = require("express")
const bodyParser = require("body-parser")
const fetch = require("isomorphic-fetch")
const { response } = require("express")
const app = new express()
require("dotenv").config()
const port =8000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/battle.net_access_token", async (req, res, next) => {
    const clientID = process.env.BNET_ID
    const clientSecret = process.env.BNET_SECRET
    console.log(clientSecret, clientID,"CLIENT")
    const authString = Buffer.from(clientID + ":" + clientSecret).toString(
        "base64"
    )

    const response = await fetch("http://us.battle.net/oauth/token",{
        method:"POST",
        body:"grant_type=client_credentials",
        headers:{
            Authorization:`Basic ${authString}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
    const json = await response.json()
console.log(json , "XXXXXXX")
res.status(200).json(json)

})


app.listen(port, function(error) {
    if(error){
        console.error(error)
    } else {
        console.log(`listening on port ${port}`)
    }
})