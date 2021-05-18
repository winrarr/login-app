const routes = require('express').Router();
const db = require("../database/database.js")
const crypto = require("crypto")
var sessions = require("../session-config.js")


routes.post("", (req, res) => {
    const username = req.body.username
    const hhPass = crypto.createHash("sha256")
                            .update(req.body.hPass)
                            .digest("hex")

    const sql = "insert into user(username, password) values(?, ?)"

    db.run(sql, [username, hhPass], (err) => {
        let id = crypto.randomBytes(32).toString('hex')
        let session = {
            id: id,
            username: username,
        }
        sessions.push(session)
        res.status(200).send(id)
    })
})


module.exports = routes
