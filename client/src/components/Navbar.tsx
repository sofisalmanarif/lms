import { BookOpen } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { DropdownMenuDemo } from "./DropdownMenuDemo"
import { TypographyMuted } from "./Typogrphies"


const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur-md  px-4 md:px-20 py-3 ">
      <div className="flex  items-center  justify-between sm:h-[7vh]   ">
      <Link to={"/"} className="flex items-center justify-center  gap-4 ">
          <div className="bg-primary md:h-[5vh] p-1 md:w-[5vh] h-8 w-8 flex items-center justify-center rounded-full text-secondary"><BookOpen size={20} />
          </div>
          <div className="flex  items-center justify-center">
          <NavLink to={"/"} className="md:text-[3vh] md:block hidden  text-primary">
            Logo</NavLink>

          </div>

        </Link>            
         <section className=" h-full flex gap-4 md:gap-10 items-center justify-center">
          <Link to={"/contact"} >
          <TypographyMuted className=" hover:text-accent-foreground ease-in-out  duration-300">Contact Us</TypographyMuted></Link>
          <DropdownMenuDemo>
          <div className="md:h-[5vh] md:w-[5vh] h-8 w-8 rounded-full bg-orange overflow-hidden">
            <Link to={'/profile'}>
            <img src="https://github.com/shadcn.png" alt="" />
            </Link>
          </div>
            </DropdownMenuDemo>

        </section>
      </div>


    </header>
  )
}

export default Navbar