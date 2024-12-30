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
import * as yup from "yup"
import AuthFooter from "@/components/AuthFooter"
import { TypographyP } from "@/components/Typogrphies"


type LibraryType = {
    name: string,
    email: string,
    licienceNo: string,
    adminName: string,
    address: string,
    validDocument: string

}

const RegisterLibrary = () => {
    const [library, setLibrary] = useState<LibraryType>({ email: '', name: "", licienceNo: "", address: '', adminName: '', validDocument: '' })
    const [errors, setErrors] = useState<Partial<LibraryType>>()

    let validationSchema = yup.object({
        name: yup.string().min(6, "Library must contain atleast 8 characters").required("Library name is required"),
        adminName: yup.string().min(6, "Admin Name must contain atleast 8 characters").required("Admin Name is required"),
        email: yup.string().email("Invalid Email format").required("Email is required"),
        licienceNo: yup.string().required("Library Licience Number is required"),
        // phoneNumber: yup.string().
        //     min(10, "Phone Number must be atleast 10 digit")
        //     .matches(/[0-9]/, "Phone Number must contain numbers only")
        //     .required("Phone Number is required"),
        address: yup.string().required("Address is required"),
        validDocument: yup.string().required("Please upload one Document"),

    });


    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setErrors({})
            const validatedLibrary = await validationSchema.validate(library, { abortEarly: false })
            console.log("form submitted", library)
            console.log("validatedUser", validatedLibrary)

            console.log("parsed user ")
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                const newErrors: Partial<LibraryType> = {};
                error.inner.forEach((err) => {
                    if (err.path) {
                        newErrors[err.path as keyof LibraryType] = err.message;
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
                    <h1 className="text-4xl font-bold  text-left sm:-ml-[65px] -ml-[120px]">Register Library</h1>
                    <form onSubmit={loginHandler} className="flex w-[70%] flex-col gap-4 ">
                        <div>
                            <Label>Library Name</Label>
                            <Input value={library?.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLibrary({ ...library, name: e.target.value })} type="text" placeholder="jhon"></Input>
                            {errors?.name && <ErrorMessage message={errors.name} />}
                        </div>
                        <div>
                            <Label>Email</Label>
                            <Input value={library?.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLibrary({ ...library, email: e.target.value })} type="email" placeholder="example@gmail.com"></Input>
                            {errors?.email && <ErrorMessage message={errors.email} />}
                        </div>

                        <div>
                            <Label>Library Admin Name</Label>
                            <Input value={library?.adminName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLibrary({ ...library, adminName: e.target.value })} type="select" placeholder="XXX XXX XXXX"></Input>
                            {errors?.adminName && <ErrorMessage message={errors.adminName} />}
                        </div>
                        <div>
                            <Label>Address</Label>
                            <Input value={library?.address} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLibrary({ ...library, address: e.target.value })} type="select" placeholder="Srinagar"></Input>
                            {errors?.address && <ErrorMessage message={errors.address} />}
                        </div>
                        <div>
                            <Label>Valid Document</Label>
                            <Input value={library?.validDocument} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLibrary({ ...library, validDocument: e.target.value })} type="file" ></Input>
                            {errors?.validDocument && <ErrorMessage message={errors.validDocument} />}
                        </div>
                        <div>
                            <Label>Library Licience No</Label>
                            <Input value={library?.licienceNo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLibrary({ ...library, licienceNo: e.target.value })} type="select" placeholder="Srinagar"></Input>
                            {errors?.licienceNo && <ErrorMessage message={errors.licienceNo} />}
                        </div>

                        <Button type="submit" className="sm:mt-6 mt-2 flex items-center justify-center sm:w-24 w-20 font-semibold">Register</Button>
                    </form>
                    <TypographyP className="text-sm  sm:-ml-[100px]">Already have an account? <Link className="text-blue-700 font-semibold" to={"/login"}> Sign In</Link> </TypographyP>
                    <AuthFooter />
                </div>
            </div>
            <AuthSideBar />

        </div>
    )
}

export default RegisterLibrary