import { BookOpen } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { DropdownMenuDemo } from "./DropdownMenuDemo"


const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur-md px-4 sm:px-20 py-3">
      <div className="flex  items-center  justify-between   ">
      <Link to={"/"} className="flex items-center justify-center  gap-2 ">
          <div className="bg-orange-500 sm:h-12 p-1 sm:w-12 h-8 w-8 flex items-center justify-center rounded-full text-white"><BookOpen size={20} /></div>
          <NavLink to={"/"} className="sm:text-3xl sm:block hidden  text-orange-500">
            Logo</NavLink>


        </Link>            
         <section className=" h-full flex gap-4 sm:gap-10 items-center justify-center">
          <Link to={"/contact"} className="text-gray-500 sm:text-lg text-sm hover:text-black ease-in-out  duration-300">Contact Us</Link>
          <DropdownMenuDemo>
          <div className="sm:h-12 sm:w-12 h-8 w-8 rounded-full bg-orange overflow-hidden">
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