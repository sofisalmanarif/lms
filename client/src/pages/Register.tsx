import { Button } from "@/components/ui/button"
import ErrorMessage from "@/components/ui/ErrorMessage"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"

import { useState } from "react"
import { Link } from "react-router-dom"
import  * as yup from "yup"


type UserType = {
    userName:string,
    email:string,
    library:string,
    phoneNumber:string,
    address:string,
    validDocument:string

    password?:string
}

const Register = () => {
    const [user, setUser] = useState<UserType>({email:'',userName:"",library:"",phoneNumber:'',address:'',validDocument:'',password:''})
    // const [showPassword ,setShowPassword] = useState<boolean>(false)
    const [errors,setErrors] = useState<Partial<UserType>>()
    
    let validationSchema = yup.object({
        userName:yup.string().min(6,"Username must contain atleast 8 characters").required("Username is required"),
        email: yup.string().email("Invalid Email format").required("Email is required"),
        library:yup.string().required("Please Select Library"),
        phoneNumber:yup.string().
        min(10,"Phone Number must be atleast 10 digit")
        .matches(/[0-9]/,"Phone Number must contain numbers only")
        .required("Phone Number is required"),
        address:yup.string().required("Address is required"),
        validDocument:yup.string().required("Please upload one Document"),
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
                console.log(newErrors);
                setErrors(newErrors);
              }
        }
    }



  return (
    <div className="w-full h-screen  flex ">
        <div className="w-[50%] flex items-center justify-center "> 
            <div className="flex flex-col w-[50%]  gap-10">
                <h1 className="text-4xl font-bold ">Register</h1>
                <form onSubmit={loginHandler}  className="flex w-[70%] flex-col gap-4 ">
                <div>
                        <Label>Username</Label>
                        <Input value={user?.userName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, userName: e.target.value })} type="text" placeholder="jhon"></Input>
                        {errors?.userName && <ErrorMessage message={errors.userName}/>}
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input value={user?.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, email: e.target.value })} type="email" placeholder="example@gmail.com"></Input>
                        {errors?.email && <ErrorMessage message={errors.email}/>}
                    </div>
                    <div>
                        <Label>Library</Label>
                        <Input value={user?.library} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, library: e.target.value })} type="select" placeholder=""></Input>
                        {errors?.library && <ErrorMessage message={errors.library}/>}
                    </div>
                    <div>
                        <Label>Phone number</Label>
                        <Input value={user?.phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, phoneNumber: e.target.value })} type="select" placeholder="XXX XXX XXXX"></Input>
                        {errors?.phoneNumber && <ErrorMessage message={errors.phoneNumber}/>}
                    </div>
                    <div>
                        <Label>Address</Label>
                        <Input value={user?.address} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, address: e.target.value })} type="select" placeholder="Srinagar"></Input>
                        {errors?.address && <ErrorMessage message={errors.address}/>}
                    </div>
                    <div>
                        <Label>Valid Document</Label>
                        <Input value={user?.validDocument} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, validDocument: e.target.value })} type="file" ></Input>
                        {errors?.validDocument && <ErrorMessage message={errors.validDocument}/>}
                    </div>
                    {/* <div className="relative">
                        <Label>Password</Label>
                        <Input value={user?.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, password: e.target.value })} type={showPassword?"password":"text"} placeholder="*********"></Input>
                        {errors?.password && <ErrorMessage message={errors.password}/>}
                        <span  onClick={()=>setShowPassword(prev=>!prev)} className="absolute cursor-pointer top-[30px] right-3">

                        {
                            showPassword?<EyeClosedIcon />:<EyeIcon/>
                        }
                        </span>
                    </div> */}
                    {/* <Link className="text-blue-700 text-xs" to={"/"}>Forgot Password</Link> */}
                    <Button  type="submit" className="mt-6 flex items-center justify-center w-24">Sign Up</Button>
                </form>
            <span className="text-sm">Already have an account? <Link className="text-blue-700" to={"/"}>Sign In</Link> </span>
            
            </div>
        </div>
        <div className="w-[50%] flex items-center justify-start "> 
            <img src="../../public/undraw_secure_login_pdn4.svg" alt="" />
        </div>

    </div>
  )
}

export default Register