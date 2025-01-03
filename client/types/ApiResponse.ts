export type ApiResponse<T> = {
    statusCode: number;
    data: T;
    message: string;
    success: boolean;
};

export type ErrorResponse = {
    statusCode: number;
    message: string;
    sucess: boolean;
};

export type MessageResponse = {
    statusCode:number;
    success: boolean;
    message: string;
};