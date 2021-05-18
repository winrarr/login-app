const routes = require('express').Router();
const db = require("../database/database.js")

routes.use("/login", require("./login.js"))
routes.use("/register", require("./register.js"))

routes.get("/custom", (req, res) => {
    const sql = req.query.query
    db.all(sql, (err, rows) => {
        res.send(rows)
    })
})

module.exports = routes