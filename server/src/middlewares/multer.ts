import multer from "multer"
import fs from 'fs'
import path from 'path'
// path.join(import.meta.dirname)
console.log()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // fs.mkdirSync('./uploads')

        cb(null, './uploads')


    },
    filename: function (req, file, cb) {
        const filename ="lms"+Date.now()+"."+file.originalname.split(".")[1]

        cb(null, filename)
    },

})

export const upload = multer({ storage: storage })