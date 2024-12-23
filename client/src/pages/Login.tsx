import AuthFooter from "@/components/AuthFooter"
import AuthSideBar from "@/components/AuthSideBar"
import { TypographyP, TypographySmall } from "@/components/Typogrphies"
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
    <div className="w-full max-w-[1920px] mx-auto  h-screen  flex ">
        <div className="sm:w-[50%] w-full flex flex-col relative px-0 items-center justify-center "> 
            <div className="flex flex-col  sm:w-[50%] w-full text-left items-center  gap-6">
                <h2 className="text-4xl font-bold sm:-ml-[70px] -ml-[36px] ">Welcome back</h2>  
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
                        <span  onClick={()=>setShowPassword(prev=>!prev)} className="absolute text-gray-500 cursor-pointer top-[30px] right-3">

                        {
                            showPassword?<EyeClosedIcon />:<EyeIcon/>
                        }
                        </span>
                    </div>
                    <TypographySmall>

                    <Link className="text-blue-700 text-xs" to={"/"}>Forgot Password</Link>
                    </TypographySmall>
                    <Button  type="submit" className="sm:mt-6 mt-2 flex items-center justify-center sm:w-24 w-20 font-semibold">Sign In</Button>
                </form>
            <TypographyP    className="text-sm sm:-ml-[116px] ">Dont have an account? <Link className="text-blue-700 font-semibold" to={"/register"}>Sign Up</Link> </TypographyP>
            </div>
            <AuthFooter/>
        </div>
        <AuthSideBar/>


    </div>
  )
}

export default Login