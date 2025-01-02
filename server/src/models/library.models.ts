import mongoose, { Document,Schema } from "mongoose"

export interface LibraryType extends Document {
    lib_name: string;
    lib_admin: string;
    lib_email: string;
    lib_licence: string;
    lib_location: string;
    lib_docs: string;
    library_verified: boolean
}


const librarySchema = new Schema<LibraryType>({
    lib_name: {
        type: String,
        required: true,
        unique:true,
    },
    lib_location: {
        type: String,
        required: true,
        maxlength: 100,
    },
    lib_admin: {
        type: String,
        required: true,
    },
    lib_email: {
        type: String,
        required: true,
        unique: true,
    },
    lib_licence: {
        type: String,
        required: true,
        maxlength: 100,
    },
    lib_docs: {
        type: String,
        maxlength: 100,
    },
    library_verified: {
        type: Boolean,
        default: false,
    },

});

const Library = mongoose.model<LibraryType>('Library', librarySchema);

export default Library;
