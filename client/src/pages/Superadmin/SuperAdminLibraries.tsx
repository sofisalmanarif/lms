
import { LibraryTable } from "@/components/Dashboard/LibraryTable"
import { TypographyTableH2 } from "@/components/Typogrphies"


export function SuperAdminLibraries() {
  return (
    
        <div className="flex flex-1 flex-col bg-orange-100/10 max-h-[93vh] sm:gap-4 sm:px-20 gap-0 p-4 ">
          <div className="sm:mt-10 mt-0">

          <TypographyTableH2 >Libraries</TypographyTableH2>
          </div>
          <LibraryTable/>
        </div>  
      
  )
}
