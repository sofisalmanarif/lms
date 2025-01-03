import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import * as yup from "yup";
import { useCreateLibraryMutation } from "@/redux/api/LibraryApi";
import { LibraryType } from "types/library.types";
import { useToast } from "@/hooks/use-toast";
import { MessageResponse } from "types/ApiResponse";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const RegisterLibraryForm = () => {
    const [library, setLibrary] = useState<LibraryType>({
        email: "",
        name: "",
        licienceNo: "",
        address: "",
        adminName: "",
    });
    const [validDocument, setValidDocument] = useState<File>();
    const [errors, setErrors] = useState<Partial<LibraryType>>();
    const { toast } = useToast();

    const [createLibrary] = useCreateLibraryMutation();

    let validationSchema = yup.object({
        name: yup
            .string()
            .min(6, "Library must contain atleast 8 characters")
            .required("Library name is required"),
        adminName: yup
            .string()
            .min(6, "Admin Name must contain atleast 8 characters")
            .required("Admin Name is required"),
        email: yup
            .string()
            .email("Invalid Email format")
            .required("Email is required"),
        licienceNo: yup
            .string()
            .required("Library Licience Number is required"),
        address: yup.string().required("Address is required"),
    });

    const registerLibraryHandler = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();
        try {
            const formDAta = new FormData();
            setErrors({});
            const validatedLibrary = await validationSchema.validate(library, {
                abortEarly: false,
            });
            formDAta.set("name", validatedLibrary.name);
            formDAta.set("email", validatedLibrary.email);
            formDAta.set("adminName", validatedLibrary.adminName);
            formDAta.set("address", validatedLibrary.address);
            formDAta.set("licienceNo", validatedLibrary.licienceNo);
            if (validDocument) {
                formDAta.set("validDocument", validDocument);
            }
            console.log("formdata", formDAta);

            const res = await createLibrary(formDAta);

            if ("data" in res) {
                toast({
                    title: "congrates",
                    description: res.data?.message,
                });
            } else {
                const error = res.error as FetchBaseQueryError;
                const messageResponse = error.data as MessageResponse;
                toast({
                    title: "Sorry",
                    description: messageResponse.message,
                    variant:"destructive"
                });
            }
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                const newErrors: Partial<LibraryType> = {};
                error.inner.forEach((err) => {
                    if (err.path) {
                        newErrors[err.path as keyof LibraryType] = err.message;
                    }
                });
                setErrors(newErrors);
            } else {
                const err = error as Error;
                console.error("Unexpected error:", err);
                
            }
        }
    };

    const selectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setValidDocument(e.target.files[0]);
        }
    };

    return (
        <form
            onSubmit={registerLibraryHandler}
            className="flex w-[70%] flex-col gap-4 "
        >
            <div>
                <Label>Library Name</Label>
                <Input
                    value={library?.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setLibrary({ ...library, name: e.target.value })
                    }
                    type="text"
                    placeholder="jhon"
                ></Input>
                {errors?.name && <ErrorMessage message={errors.name} />}
            </div>
            <div>
                <Label>Email</Label>
                <Input
                    value={library?.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setLibrary({ ...library, email: e.target.value })
                    }
                    type="email"
                    placeholder="example@gmail.com"
                ></Input>
                {errors?.email && <ErrorMessage message={errors.email} />}
            </div>

            <div>
                <Label>Library Admin Name</Label>
                <Input
                    value={library?.adminName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setLibrary({ ...library, adminName: e.target.value })
                    }
                    type="text"
                    placeholder="jhon"
                ></Input>
                {errors?.adminName && (
                    <ErrorMessage message={errors.adminName} />
                )}
            </div>
            <div>
                <Label>Address</Label>
                <Input
                    value={library?.address}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setLibrary({ ...library, address: e.target.value })
                    }
                    type="text"
                    placeholder="Srinagar"
                ></Input>
                {errors?.address && <ErrorMessage message={errors.address} />}
            </div>
            <div>
                <Label>Valid Document</Label>
                <input type="file" accept="image/*" onChange={selectImage} />
                {/* {errors?.validDocument && <ErrorMessage message={errors.validDocument.toString()} />} */}
            </div>
            <div>
                <Label>Library Licience No</Label>
                <Input
                    value={library?.licienceNo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setLibrary({ ...library, licienceNo: e.target.value })
                    }
                    type="text"
                    placeholder="Srinagar"
                ></Input>
                {errors?.licienceNo && (
                    <ErrorMessage message={errors.licienceNo} />
                )}
            </div>

            <Button
                type="submit"
                className="sm:mt-6 mt-2 flex items-center justify-center sm:w-24 w-20 font-semibold"
            >
                Register
            </Button>
        </form>
    );
};

export default RegisterLibraryForm;
