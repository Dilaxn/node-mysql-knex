require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require("./route/router")

const app = express()




const PORT = process.env.PORT

app.use(express.json())
app.use(cors({
    origin: 'http://127.0.0.1:5500' // <-- your client app url (live server)
}))


app.use("/api",router)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))