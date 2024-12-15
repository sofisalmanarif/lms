import { BookOpen } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { DropdownMenuDemo } from "./DropdownMenuDemo"


const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur-md sm:h-[7vh] px-4 md:px-20 py-3">
      <div className="flex  items-center  justify-between   ">
      <Link to={"/"} className="flex items-center justify-center  gap-2 ">
          <div className="bg-orange-500 md:h-10 p-1 md:w-10 h-8 w-8 flex items-center justify-center rounded-full text-white"><BookOpen size={20} />
          </div>
          <NavLink to={"/"} className="md:text-3xl md:block hidden  text-orange-500">
            Logo</NavLink>


        </Link>            
         <section className=" h-full flex gap-4 md:gap-10 items-center justify-center">
          <Link to={"/contact"} className="text-gray-500 md:text-lg text-md hover:text-black ease-in-out  duration-300">Contact Us</Link>
          <DropdownMenuDemo>
          <div className="md:h-10 md:w-10 h-8 w-8 rounded-full bg-orange overflow-hidden">
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