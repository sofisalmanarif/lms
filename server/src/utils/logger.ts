import { createLogger, format, transports } from "winston";
// const { combine, timestamp, json, colorize } = format;

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
    format.colorize(),
    format.printf(({ level, message }) => {
        return `${level}: ${message} `;
    })
);

// Create a Winston logger
const logger = createLogger({
    transports: [
        new transports.Console({
            format: consoleLogFormat,
        }),
        new transports.File({ filename: "app.log", level: "info" }),
        new transports.File({ filename: 'error.log', level: 'error' })
    ],
});


export default logger;