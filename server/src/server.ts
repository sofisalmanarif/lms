import { app } from "./app.js"
import { config } from "dotenv";
import connectDB from "./db/database.js"


config()
const mongo_uri: string = process.env.MONGO_URI || ""


connectDB(mongo_uri)
    .then(() =>
        app.listen(4000, () => {
            console.log("server is listening on port 4000")
        }))
    .catch((err) => {
        console.log(err)
    })
