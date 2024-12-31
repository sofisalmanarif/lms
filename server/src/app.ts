import express, { NextFunction, Request, Response, urlencoded } from "express"
import logger from "./utils/logger.js";
import morgan from "morgan";
import cors from "cors"
import ApiResponse from "./utils/ApiResponse.js";
import { userType } from "./types/user.types.js";


import libraryRouter from "./routes/library.routes.js"
import { errorMiddleware } from "./middlewares/ErrorMiddleware.js";
import path from "path";
import bodyParser from "body-parser";
import { uploadOnCloudniary } from "./utils/cloudniary.js";
const app = express()

bodyParser.urlencoded()
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
    extended: true
}))
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.status(200).json(new ApiResponse<userType[]>(400, [{
        name: "John Doe",
        email: "john@example.com"
    }], "user created"))
})


app.use("/api/v1/libraries", libraryRouter)

app.use(errorMiddleware);

export { app }
