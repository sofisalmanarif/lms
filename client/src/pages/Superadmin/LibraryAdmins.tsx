import { AdminLibraryTable } from "@/components/Dashboard/AdminLibraryTable";
import { TypographyTableH2 } from "@/components/Typogrphies";


function LibraryAdmins() {
  return (

        <div className="flex flex-1 flex-col bg-orange-100/10  max-h-[93vh] sm:gap-4 sm:px-20 gap-0 p-4 ">
          <div className="sm:mt-10 mt-0">

          <TypographyTableH2 >Admins</TypographyTableH2>
          </div>
          <AdminLibraryTable/>
        </div>
      
  )
}

export default LibraryAdmins
