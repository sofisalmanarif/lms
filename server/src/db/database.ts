import mongoose from "mongoose";


const connectDB = async (mongo_uri: string) => {
    try {
        console.log("Connecting to Database...")
        const connection = await mongoose.connect(`${mongo_uri}/lmsdatabase`)
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.log("Database Connection failed", error)
        process.exit(1)

    }
}

export default connectDB