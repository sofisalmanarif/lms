class ApiResponse<T> {
    statusCode: number;
    data?: T; // Optional property
    message: string;
    success: boolean;

    constructor(statusCode: number, message: string, data?: T) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data; 
        this.success = statusCode < 400; 
    }
}

export default ApiResponse;
