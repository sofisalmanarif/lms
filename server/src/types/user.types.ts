import mongoose from "mongoose";

enum Role {
    Admin = "Admin",
    SuperAdmin = "Super Admin",
    User = "User",
}

export type userType = {
    userName: string;
    email: string;
    password: string;
    validDocument: string;
    role: Role;
    isVerified: boolean;
    phoneNumber: string;
    profilePicture?: string;
    verificationCode?: string;
    verificationCodeExpiry?: string
    libId: mongoose.Types.ObjectId;
}
