
import { Link } from 'react-router-dom'

const AuthFooter = () => {
  return (
    <footer className="absolute text-xs text-gray-500 bottom-0 w-[94%] border-t-2 border-gray-200 px-5 py-8 flex items-center justify-between h-10"> 
                <span>&copy; 2024-2025</span>
                <div className=" flex gap-4"> 
                    <Link to={"/"}>Privacy policy</Link>
                    <Link to={"/"}> Terms and Conditions</Link>
                </div>
            
            </footer>
  )
}

export default AuthFooter