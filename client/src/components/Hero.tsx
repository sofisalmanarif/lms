import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"


const Hero = () => {
    return (
        <section className='sm:h-[60vh] h-[40vh] w-full bg-[radial-gradient(circle,_rgba(251,146,60,.7)_10%,_rgba(255,237,213,0.3)_100%,_transparent_10%)]'>
            <div className='h-full w-full backdrop-blur-3xl flex flex-col items-center justify-center sm:gap-14 gap-6'>
                <div className="sm:w-[50%] w-[90%] bg-white flex sm:h-12 h-10 rounded-md items-center pl-4">
                    <SearchIcon size={24} color="gray" />
                    <Input
                        className="py-2 sm:mt-1 mt-0 px-4 flex items-center rounded-none border-none shadow-none focus:ring-0 focus:ring-offset-0 focus:border-none focus:outline-none focus-visible:ring-0"
                        placeholder="Search"
                    />

                    <Button className="font-semibold h-full rounded-l-none sm:text-xl text-sm shadow-none ">Search</Button>
                </div>
                <div className="w-full px-4">
                    <h1 className=" text-center leading-none sm:text-6xl text-2xl font-extrabold">
                        Thousands of books,
                        Unlimited potential
                    </h1>
                    <h3 className="sm:text-xl text-xs mt-2 text-gray-500 text-center">Unlock the world of knowledge. Access your books, manage your borrowings,
                        <br />
                        and explore our vast collection with ease

                    </h3>
                </div>

            </div>

        </section>
    )
}

export default Hero