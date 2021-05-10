const express = require("express")
const app = express()
const db = require("./database/database.js")
const crypto = require("crypto");

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static("../html"))
app.use("/login", require("./routes/login.js"))
app.use("/register", require("./routes/register.js"))

app.use((req, res) => {
    res.status(404).send()
})

app.listen(8000, () => {
    console.log("Server running on port 8000")
})
