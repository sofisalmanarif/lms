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

        cb(null, file.originalname)
    },

})

export const upload = multer({ storage: storage })