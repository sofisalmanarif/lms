import { TypographyH1, TypographyMuted } from "./Typogrphies";

const AuthSideBar = () => {
    return (
        <section
            className="md:w-[50%]  hidden relative  bg-[radial-gradient(circle,_hsl(var(--primary)/0.57)_20%,_rgba(255,237,213,0.3)_90%,_transparent_10%)] sm:flex items-center justify-start"
        >
            <div className="w-full relative p-20 pt-28 h-screen backdrop-blur-3xl z-10">
                <TypographyH1>
                    Thousands of books, <br /> Unlimited potential
                </TypographyH1>
                <TypographyMuted className="text-sm mt-2 text-gray-500">
                    Unlock the world of knowledge. Access your books, manage
                    your borrowings,
                    <br /> and explore our vast collection with ease
                </TypographyMuted>

                <div className="mt-20 ml-32 relative h-[50%]  w-[50%]">
                    <img
                        src="/cure-cart.png"
                        className="w-[340px] shadow-lg absolute top-10 left-2  overflow-hidden h-56"
                        alt=""
                    />

                    <img
                        src="/Screenshot from 2024-12-11 21-47-31.png"
                        className="w-[220px] shadow-lg absolute top-20 left-72 z-20  overflow-hidden h-[220px]"
                        alt=""
                    />
                    <img
                        src="/image.png"
                        className="w-[220px] shadow-lg  absolute -bottom-10  left-40 z-30 h-[220px]"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default AuthSideBar;
