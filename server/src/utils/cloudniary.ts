import { v2 as cloudinary } from 'cloudinary';

async function uploadOnCloudniary(imagePath: string) {

    try {
    
        // Configuration
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
            api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET
        });

        const options = {
            use_filename: true,
            unique_filename: false,
            overwrite: true,
        };

        try {
            // Upload the image
            const result = await cloudinary.uploader.upload(imagePath, options);
            console.log("uploadResult", result);
            return result;
        } catch (error) {
            console.error(error);
        }


    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            console.log("An unknown error occurred:", error);
            throw new Error("An unknown error occurred");
        }
    }
}

export { uploadOnCloudniary }