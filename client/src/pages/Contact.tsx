import { Button } from "@/components/ui/button"
import ErrorMessage from "@/components/ui/ErrorMessage"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import  * as yup from "yup"

type QueryType = {
    userId:string
    email:string,
    subject:string,
    message:string
}
const Contact = () => {
    const [query, setQuery] = useState<QueryType>({userId:'',email:'',subject:'',message:''})
    const [errors,setErrors] = useState<Partial<QueryType>>()
    
    let validationSchema = yup.object({
        userId:yup.string().required("Please Enter UserId"),
        email: yup.string().email("Invalid Email format").required("Email is required"),
        subject:yup.string().required("Please enter Subject"),
        message:yup.string().required("Please Enter Message"),
      });

    const submitQueryHandler =async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
            setErrors({})
            const validatedQuery = await validationSchema.validate(query,{abortEarly:false})
            console.log("form submitted",query)
            console.log("validatedUser",validatedQuery)

        console.log("parsed user ")
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                const newErrors: Partial<QueryType> = {};
                error.inner.forEach((err) => {
                  if (err.path) {
                    newErrors[err.path as keyof QueryType] = err.message;
                  }
                });
                // console.log(newErrors);
                setErrors(newErrors);
              }
        }
    }

  return (
    <main className='sm:mx-20 mx-4 my-10'>
        <h1 className="sm:text-4xl text-xl font-semibold mb-10">Contact Us</h1>
        <div>
            <form className="container max-w-2xl flex gap-4 flex-col" onSubmit={submitQueryHandler}>
            <div>
                        <Label>User Id</Label>
                        <Input value={query?.userId} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery({ ...query, userId: e.target.value })} type="text" placeholder="675265365265"></Input>
                        {errors?.userId && <ErrorMessage message={errors.userId}/>}
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input value={query?.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery({ ...query, email: e.target.value })} type="email" placeholder="example@gmail.com"></Input>
                        {errors?.email && <ErrorMessage message={errors.email}/>}
                    </div>
                    <div>
                        <Label>Subject</Label>
                        <Input value={query?.subject} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery({ ...query, subject: e.target.value })} type="text" placeholder="675265365265"></Input>
                        {errors?.subject && <ErrorMessage message={errors.subject}/>}
                    </div>
                    <div>
                        <Label>Enter Your Message</Label>
                        <Input value={query?.message} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery({ ...query, message: e.target.value })} type="text" placeholder="message"></Input>
                        {errors?.message && <ErrorMessage message={errors.message}/>}
                    </div>
                    <Button  type="submit" className="sm:mt-6 mt-2 flex items-center justify-center sm:w-24 w-20 font-semibold">Submit</Button>
            </form>
        </div>
    </main>
  )
}

export default Contact