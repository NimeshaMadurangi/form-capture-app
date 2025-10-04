// server/index.js
require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json({ limit: "10mb" })) // accept base64 images

// simple health check
app.get("/api/health", (req, res) => res.json({ ok: true }))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
