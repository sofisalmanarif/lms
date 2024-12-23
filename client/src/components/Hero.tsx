import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import SearchListDiv from "./SearchListDiv"
import { useState } from "react"
import { TypographyH1, TypographyMuted } from "./Typogrphies"


const Hero = () => {
    const [searchTerm, setSearchTerm] = useState<string>("")
    return (
        <section className='sm:h-[60vh] h-[35vh] min-h-[300px] w-full bg-[radial-gradient(circle,_hsl(var(--primary)/0.5)_10%,_rgba(255,237,213,0.3)_100%,_transparent_10%)]
'>
            <div className='h-full w-full backdrop-blur-3xl sm:px-20 px-4 flex flex-col items-center  justify-center sm:gap-14 gap-6'>
                <div className="sm:w-[50vw] relative w-[90%] bg-white flex sm:h-12 h-10 rounded-md items-center pl-4">
                    <span> <SearchIcon size={24} color="gray" /></span>
                    <Input
                        className="py-2  mt-0 px-4 flex items-center rounded-none border-none shadow-none focus:ring-0 focus:ring-offset-0 focus:border-none focus:outline-none focus-visible:ring-0"
                        placeholder="Search"
                        type="text"
                        value={searchTerm || ""}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    />


                    <Button className="font-semibold h-full rounded-l-none sm:text-xl text-sm shadow-none ">Search</Button>

                    {searchTerm && <SearchListDiv />}
                </div>
                <div className="w-full flex  justify-center items-center flex-col px-4">
                    <TypographyH1 className="text-center" >Thousands of books,
                        Unlimited potential</TypographyH1>
                    <TypographyMuted className="md:mt-4 mt-2">
                        Unlock the world of knowledge. Access your books, manage your borrowings,
                    </TypographyMuted>
                    <TypographyMuted>
                        and explore our vast collection with ease

                    </TypographyMuted>

                </div>

            </div>

        </section>
    )
}

export default Hero