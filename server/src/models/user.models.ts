import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

enum Role {
    Admin = "Admin",
    SuperAdmin = "Super Admin",
    User = "User",
}

interface UserType extends Document {
    userName: string;
    email: string;
    password: string;
    role: Role;
    isVerified: boolean;
    phoneNumber: string;
    profilePicture: string;
    verificationCode: string;
    verificationCodeExpiry: string
    libId: mongoose.Types.ObjectId;
    allowedBooks: number;
    allotedBooks: number;
    userFine: number;
}


const userSchema = new Schema<UserType>({

    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.User
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    phoneNumber: {
        type: String,
    },
    profilePicture: {
        type: String,
    },
    verificationCode: {
        type: String,
    },
    verificationCodeExpiry: {
        type: String,
    },
    libId: {
        type: Schema.Types.ObjectId,
        ref: "Library"
    },
    allowedBooks: {
        type: Number,
        default: 4
    },
    allotedBooks: {
        type: Number,
        default: 0
    },
    userFine: {
        type: Number,
        default: 0
    },

})


userSchema.pre("save", async function (next): Promise<void> {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()

});

userSchema.methods.isPasswordCorrect = async function(password:string):Promise<boolean>{
    return await bcrypt.compare(password,this.password)

}

userSchema.methods.generateJwtToken = function():string{
    return jwt.sign({_id:this._id,role:this.role},process.env.JWT_SECRET!)

}


const User = mongoose.model<UserType>("User", userSchema)
export default User;