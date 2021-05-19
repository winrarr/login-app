const routes = require('express').Router();
const db = require("../database/database.js")
const crypto = require("crypto")
var sessions = require("../session-config.js")


routes.post("", (req, res) => {
    const username = req.body.username
    const hhPass = crypto.createHash("sha256")
                            .update(req.body.hPass)
                            .digest("hex")

    const sql = "select * from user where upper(username)=upper(?) and password=?"

    db.get(sql, [username, hhPass], (err, row) => {
        if (typeof row == "undefined") {
            res.status(401).send()
        } else {
            const session = crypto.randomBytes(32).toString('hex')
            sessions.push(session)
            res.status(200).send(session)
        }
    })
})


module.exports = routes
