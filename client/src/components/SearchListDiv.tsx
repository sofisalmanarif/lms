import {  ArrowRight } from "lucide-react"
import { TypographyMuted } from "./Typogrphies"


const SearchListDiv = () => {
  return (
    <div className="w-full absolute  top-14  rounded-md  h-64 overflow-y-scroll left-0 bg-white">
        <div className="w-full h-full overflow-y-scroll">
        <div className="flex justify-between items-center p-4 sm:px-10 border-b  bg-white border-gray-200 hover:bg-orange-50">
            <TypographyMuted>
            You Don't know js
            </TypographyMuted>
            <ArrowRight color="orange"/>
        </div>
        <div className="flex justify-between items-center sm:py-4 duration-300 ease-in-out py-3 px-3 sm:px-10 border-b border-gray-200 hover:bg-orange-50">
            <p className="text-zinc-500"> You Don't know js</p>
            <ArrowRight color="orange"/>
        </div>
        <div className="flex justify-between items-center p-4 sm:px-10 border-b  border-gray-200 hover:bg-orange-50">
            <p className="text-zinc-500"> You Don't know js</p>
            <ArrowRight color="orange"/>
        </div>
        <div className="flex justify-between items-center sm:py-4 duration-300 ease-in-out py-3 px-3 sm:px-10 border-b border-gray-200 hover:bg-orange-50">
            <p className="text-zinc-500"> You Don't know js</p>
            <ArrowRight color="orange"/>
        </div>
        <div className="flex justify-between items-center p-4 sm:px-10 border-b  border-gray-200 hover:bg-orange-50">
            <p className="text-zinc-500"> You Don't know js</p>
            <ArrowRight color="orange"/>
        </div><div className="flex justify-between items-center sm:py-4 duration-300 ease-in-out py-3 px-3 sm:px-10 border-b border-gray-200 hover:bg-orange-50">
            <p className="text-zinc-500"> You Don't know js</p>
            <ArrowRight color="orange"/>
        </div>
        <div className="flex justify-between items-center p-4 sm:px-10 border-b  border-gray-200 hover:bg-orange-50">
            <p className="text-zinc-500"> You Don't know js</p>
            <ArrowRight color="orange"/>
        </div><div className="flex justify-between items-center sm:py-4 duration-300 ease-in-out py-3 px-3 sm:px-10 border-b border-gray-200 hover:bg-orange-50">
            <p className="text-zinc-500"> You Don't know js</p>
            <ArrowRight color="orange"/>
        </div>
        <div className="flex justify-between items-center p-4 sm:px-10 border-b  border-gray-200 hover:bg-orange-50">
            <p className="text-zinc-500"> You Don't know js</p>
            <ArrowRight color="orange"/>
        </div>  
        
        </div>

        
    </div>
  )
}

export default SearchListDiv