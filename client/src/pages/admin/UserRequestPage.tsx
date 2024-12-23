import { UserRequestTable } from "@/components/admin/UserRequestTable"
import { TypographyTableH2 } from "@/components/Typogrphies"



export function UsersRequestPage() {
  return (

    <div className="flex flex-1 z-10 flex-col  max-h-[93vh] bg-orange-100/10 sm:gap-4 sm:px-20 gap-0 p-4 ">
      <div className="sm:mt-10 mt-0">

      <TypographyTableH2 >New Users</TypographyTableH2>
      </div>
      <UserRequestTable />
    </div>

  )
}
