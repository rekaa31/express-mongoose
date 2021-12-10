const dotenv = require("dotenv")
dotenv.config()

const express = require("express")

const routes = require("./routes")
const openDBConnection = require("./helpers/db")


const port = process.env.PORT || 3000
const uri = process.env.MONGO_URI
const dbOptions = {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS
}

async function main() {
    try {
        // mastikan database connect, baru kita jalankan app.
        await openDBConnection(uri, dbOptions)

        const app = express()

        app.use(express.json()) // biar kita bisa ambil request body.

        app.use(routes)

        app.listen(port, () => {
            console.log("server is listening on port", port)
        })
        
    } catch (error) {
        console.log("main:", error)
    }
}

main() // menjalankan main.


