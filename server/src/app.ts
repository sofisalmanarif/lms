import express, { urlencoded } from "express"
import logger from "./logger.js";
import morgan from "morgan";
import cors from "cors"


const app = express()


const morganFormat = ":method :url :status :response-time ms";
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}


// middlewares
app.use(
    morgan(morganFormat, {
        stream: {
            write: (message: string) => {
                const logObject = {
                    method: message.split(" ")[0],
                    url: message.split(" ")[1],
                    status: message.split(" ")[2],
                    responseTime: message.split(" ")[3],
                };
                logger.info(JSON.stringify(logObject));
            },
        },
    })
);
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.get("/", (req, res) => {
    res.send("hello world")
})


export { app }
