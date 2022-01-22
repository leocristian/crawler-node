const express = require("express")
const flightRouter = require("./routes/flight")

const PORT = 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", flightRouter)

module.exports = { app, PORT }