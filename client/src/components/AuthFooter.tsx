
import { Link } from 'react-router-dom'
import { TypographySmall } from './Typogrphies'

const AuthFooter = () => {
  return (
    <footer className="absolute text-xs text-gray-500 bottom-0 w-[94%] border-t-2 border-gray-200 sm:px-5 px-2 sm:py-8 py-6 flex items-center justify-between h-10"> 
                <TypographySmall className='sm:text-xs text-[10px]'>&copy; 2024-2025</TypographySmall>
                <div className=" flex sm:gap-4 gap-2 sm:text-xs text-[10px]"> 
                  <TypographySmall>

                    <Link to={"/"}>Privacy policy</Link>
                  </TypographySmall>
                    <Link to={"/"}> Terms and Conditions</Link>
                </div>
            
            </footer>
  )
}

export default AuthFooter