
import { Link } from 'react-router-dom'

const AuthFooter = () => {
  return (
    <footer className="absolute text-xs text-gray-500 bottom-0 w-[94%] border-t-2 border-gray-200 sm:px-5 px-2 sm:py-8 py-6 flex items-center justify-between h-10"> 
                <span className='sm:text-xs text-[10px]'>&copy; 2024-2025</span>
                <div className=" flex sm:gap-4 gap-2 sm:text-xs text-[10px]"> 
                    <Link to={"/"}>Privacy policy</Link>
                    <Link to={"/"}> Terms and Conditions</Link>
                </div>
            
            </footer>
  )
}

export default AuthFooter