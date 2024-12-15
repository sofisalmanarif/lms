import { AdminLibraryTable } from "@/components/Dashboard/AdminLibraryTable";


export function LibraryAdmins() {
  return (

        <div className="flex flex-1 flex-col  max-h-[93vh] sm:gap-4 sm:px-20 gap-0 p-4 ">
          <h1 className="sm:text-4xl text-2xl  text-orange-500 sm:mt-10 mt-0">Admins</h1>
          <AdminLibraryTable/>
        </div>
      
  )
}
