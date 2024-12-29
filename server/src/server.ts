import { app } from "./app.js"
import { config } from "dotenv";
import connectDB from "./db/database.js"


config()

const mongo_uri: string = process.env.MONGO_URI!
const port:string = process.env.PORT!


connectDB(mongo_uri)
    .then(() =>
        app.listen(port, () => {
            console.log(`server is listening on port ${port}`)
        }))
    .catch((err) => {
        console.log(err)
    })
