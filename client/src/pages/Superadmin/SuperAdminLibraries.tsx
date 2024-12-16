
import { LibraryTable } from "@/components/Dashboard/LibraryTable"


export function SuperAdminLibraries() {
  return (
    
        <div className="flex flex-1 flex-col bg-orange-100/10 max-h-[93vh] sm:gap-4 sm:px-20 gap-0 p-4 ">
          <h1 className="sm:text-4xl text-2xl  text-orange-500 sm:mt-10 mt-0">Libraries</h1>
          <LibraryTable/>
        </div>  
      
  )
}
