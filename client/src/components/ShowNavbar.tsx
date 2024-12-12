import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ShowNavbar = ({children}:{children:React.ReactNode}) => {
    const location = useLocation()
    const [showNavbar, setShowNavbar] = useState(true)


    useEffect(() => {
      if(location.pathname =="/login" || location.pathname =="/register"){

          setShowNavbar(false)
      }
      else{
        setShowNavbar(true)
      }
    
      
    }, [showNavbar,location])
    

    console.log("location ",location.pathname)
  return (
    <>
    {showNavbar && children}
    </>
  )
}

export default ShowNavbar