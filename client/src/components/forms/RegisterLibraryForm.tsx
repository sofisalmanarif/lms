import { Button } from "@/components/ui/button"
import ErrorMessage from "@/components/ui/ErrorMessage"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { useState } from "react"
import * as yup from "yup"
import { useCreateLibraryMutation } from "@/redux/api/LibraryApi"
import { LibraryType } from "types/library.types"




const RegisterLibraryForm = () => {

    const [library, setLibrary] = useState<LibraryType>({ email: '', name: "", licienceNo: "", address: '', adminName: '', })
    const [validDocument, setValidDocument] = useState<Blob>()
    const [errors, setErrors] = useState<Partial<LibraryType>>()

    const [createLibrary] = useCreateLibraryMutation()

    let validationSchema = yup.object({
        name: yup.string().min(6, "Library must contain atleast 8 characters").required("Library name is required"),
        adminName: yup.string().min(6, "Admin Name must contain atleast 8 characters").required("Admin Name is required"),
        email: yup.string().email("Invalid Email format").required("Email is required"),
        licienceNo: yup.string().required("Library Licience Number is required"),
        address: yup.string().required("Address is required"),


    });


    const registerLibraryHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const formDAta = new FormData()
            setErrors({})
            const validatedLibrary = await validationSchema.validate(library, { abortEarly: false })
            // console.log("form submitted", library)
            console.log("validatedUser", validatedLibrary)
            formDAta.append("name", validatedLibrary.name),
                formDAta.append("email", validatedLibrary.email),
                formDAta.append("adminName", validatedLibrary.adminName),
                formDAta.append("address", validatedLibrary.address),
                formDAta.append("licienceNo", validatedLibrary.licienceNo),
                formDAta.append("validDocument", validDocument as Blob),

                console.log("formdata", formDAta)

            const data = await createLibrary(formDAta)

            console.log(data)

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

    const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;
        if (Array.isArray(selectedFiles) && selectedFiles.length)
            setValidDocument(selectedFiles[0]);

    };



    return (
        <form onSubmit={registerLibraryHandler} className="flex w-[70%] flex-col gap-4 ">
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
                <Input value={library?.adminName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLibrary({ ...library, adminName: e.target.value })} type="text" placeholder="jhon"></Input>
                {errors?.adminName && <ErrorMessage message={errors.adminName} />}
            </div>
            <div>
                <Label>Address</Label>
                <Input value={library?.address} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLibrary({ ...library, address: e.target.value })} type="text" placeholder="Srinagar"></Input>
                {errors?.address && <ErrorMessage message={errors.address} />}
            </div>
            <div>
                <Label>Valid Document</Label>
                <Input type="file" accept="image/*" onChange={selectImage} />
                {/* {errors?.validDocument && <ErrorMessage message={errors.validDocument.toString()} />} */}
            </div>
            <div>
                <Label>Library Licience No</Label>
                <Input value={library?.licienceNo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLibrary({ ...library, licienceNo: e.target.value })} type="text" placeholder="Srinagar"></Input>
                {errors?.licienceNo && <ErrorMessage message={errors.licienceNo} />}
            </div>

            <Button type="submit" className="sm:mt-6 mt-2 flex items-center justify-center sm:w-24 w-20 font-semibold">Register</Button>
        </form>
    )
}

export default RegisterLibraryForm