
class ErrorResponse extends Error{
    statusCode:number
    success:boolean
    constructor(statusCode:number,message:string){
        super(message);
        this.statusCode=statusCode;
        this.success=false;
    }

}

export default ErrorResponse