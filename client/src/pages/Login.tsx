import AuthSideBar from "@/components/ui/AuthSideBar"
import { Button } from "@/components/ui/button"
import ErrorMessage from "@/components/ui/ErrorMessage"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import {  EyeClosedIcon, EyeIcon, } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import  * as yup from "yup"


type UserType = {
    email:string,
    password:string
}

const Login = () => {
    const [user, setUser] = useState<UserType>({email:'',password:''})
    const [showPassword ,setShowPassword] = useState<boolean>(false)
    const [errors,setErrors] = useState<Partial<UserType>>()
    
    let validationSchema = yup.object({
        email: yup.string().email("Invalid Email format").required("Email is required"),
        password:yup.string()
        .matches(/[A-Z]/,"Password must contain atleast one uppercase character")
        .matches(/[a-z]/,"Password must contain atleast one lowercase character")
        .matches(/[0-9]/,"Password must contain atleast one number")
        .min(8,"Password must be atleast 8 characters")
        .required("Password is required")
      });

    const loginHandler =async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
            setErrors({})
            const validatedUser = await validationSchema.validate(user,{abortEarly:false})
            console.log("form submitted",user)
            console.log("validatedUser",validatedUser)

        console.log("parsed user ")
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                const newErrors: Partial<UserType> = {};
                error.inner.forEach((err) => {
                  if (err.path) {
                    newErrors[err.path as keyof UserType] = err.message;
                  }
                });
                // console.log(newErrors);
                setErrors(newErrors);
              }
        }
    }



  return (
    <div className="w-full h-screen  flex ">
        <div className="w-[50%] flex flex-col relative px-0 items-center justify-center "> 
            <div className="flex flex-col  w-[50%] text-left items-center  gap-6">
                <h1 className="text-4xl font-bold -ml-[84px] ">Welcome back</h1>  
                <form onSubmit={loginHandler}  className="flex w-[70%] flex-col gap-4 ">
                    
                    <div>
                        <Label>Email</Label>
                        <Input value={user?.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, email: e.target.value })} type="email" placeholder="example@gmail.com"></Input>
                        {errors?.email && <ErrorMessage message={errors.email}/>}
                    </div>
                    <div className="relative">
                        <Label>Password</Label>
                        <Input value={user?.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, password: e.target.value })} type={showPassword?"password":"text"} placeholder="*********"></Input>
                        {errors?.password && <ErrorMessage message={errors.password}/>}
                        <span  onClick={()=>setShowPassword(prev=>!prev)} className="absolute cursor-pointer top-[30px] right-3">

                        {
                            showPassword?<EyeClosedIcon />:<EyeIcon/>
                        }
                        </span>
                    </div>
                    <Link className="text-blue-700 text-xs" to={"/"}>Forgot Password</Link>
                    <Button  type="submit" className="mt-6 flex items-center justify-center w-24 font-semibold">Sign In</Button>
                </form>
            <span className="text-sm -ml-36 ">Dont have an account? <Link className="text-blue-700 font-semibold" to={"/register"}>Sign Up</Link> </span>
            </div>
            <footer className="absolute text-xs text-gray-500 bottom-5 w-[94%] border-t-2 border-gray-200 px-5 flex items-center justify-between h-10"> 
                <span>&copy; 2024-2025</span>
                <div className=" flex gap-4"> 
                    <Link to={"/"}>Privacy policy</Link>
                    <Link to={"/"}> Terms and Conditions</Link>
                </div>
            
            </footer>
        </div>
        <AuthSideBar/>


    </div>
  )
}

export default Login