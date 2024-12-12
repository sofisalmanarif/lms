import { BookOpen } from "lucide-react"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-40">
      <div className="flex items-center  justify-between  backdrop-blur-md px-2 sm:px-20 py-3">
        <div className="flex items-center justify-center  gap-2 ">
          <div className="bg-orange-500 sm:h-10 p-1 sm:w-10 h-8 w-8 flex items-center justify-center rounded-full text-white"><BookOpen size={20} /></div>
          <h1 className="sm:text-3xl sm:block hidden sm:mt-3 text-orange-500">
            Logo</h1>


        </div>            
         <section className=" h-full flex gap-4 sm:gap-10 items-center">
          <Link to={"/login"} className="text-gray-500 sm:text-lg text-md hover:text-black ease-in-out duration-300">Contact Us</Link>
          <div className="sm:h-12 sm:w-12 h-8 w-8 rounded-full bg-orange overflow-hidden">
            <img src="https://github.com/shadcn.png" alt="" />
          </div>

        </section>
      </div>


    </header>
  )
}

export default Navbar