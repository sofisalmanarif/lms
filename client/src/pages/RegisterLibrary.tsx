import AuthSideBar from "@/components/AuthSideBar";
import AuthFooter from "@/components/AuthFooter";
import { TypographyP } from "@/components/Typogrphies";
import RegisterLibraryForm from "@/components/forms/RegisterLibraryForm";
import { Link } from "react-router-dom";

const RegisterLibrary = () => {
    return (
        <div className="w-full min-h-screen  flex  ">
            <div className="sm:w-[50%]  min-h-[90vh] w-full relative flex items-center justify-center ">
                <div className="flex  flex-col sm:w-[50%] w-[90%] text-left items-center  gap-6">
                    <h1 className="text-4xl font-bold  text-left sm:-ml-[65px] -ml-[120px]">
                        Register Library
                    </h1>
                    <RegisterLibraryForm />
                    <TypographyP className="text-sm  sm:-ml-[100px]">
                        Already have an account?{" "}
                        <Link
                            className="text-blue-700 font-semibold"
                            to={"/login"}
                        >
                            {" "}
                            Sign In
                        </Link>{" "}
                    </TypographyP>
                    <AuthFooter />
                </div>
            </div>
            <AuthSideBar />
        </div>
    );
};

export default RegisterLibrary;
