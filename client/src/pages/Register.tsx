import AuthSideBar from "@/components/AuthSideBar"
import { Button } from "@/components/ui/button"
import ErrorMessage from "@/components/ui/ErrorMessage"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
// import { LoaderCircle } from "lucide-react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react"
import { Link } from "react-router-dom"
import  * as yup from "yup"
import AuthFooter from "@/components/AuthFooter"


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
        <div className="sm:w-[50%] w-full relative flex items-center justify-center "> 
            <div className="flex  flex-col sm:w-[50%] w-[90%] text-left items-center  gap-6">
                <h1 className="text-4xl font-bold  text-left sm:-ml-[186px] -ml-[120px]">Register</h1>
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
                        {/* <Label>Library</Label> */}
                        {/* <Input value={user?.library} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, library: e.target.value })} type="select" placeholder=""></Input> */}
                        <Select onValueChange={(value) => setUser({ ...user, library: value })} >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a Library" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                {/* <SelectLabel>Library</SelectLabel> */}
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                            </Select>
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
                    <Button  type="submit" className="sm:mt-6 mt-2 flex items-center justify-center sm:w-24 w-20 font-semibold">Sign Up</Button>
                </form>
            <span className="text-sm  sm:-ml-32">Already have an account? <Link className="text-blue-700 font-semibold" to={"/login"}> Sign In</Link> </span>
            <AuthFooter/>
            </div>
        </div>
        <AuthSideBar/>

    </div>
  )
}

export default Register