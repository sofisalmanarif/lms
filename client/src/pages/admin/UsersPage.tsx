import { UsersTable } from "@/components/admin/UsersTable"
import { AddUserDialog } from "@/components/dilogs/AddUserDialog"
import { TypographyTableH2 } from "@/components/Typogrphies"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"


function UsersPage() {
  return (

    <div className="flex flex-1 z-10 flex-col  max-h-[93vh] bg-orange-100/10 sm:gap-4 sm:px-20 gap-0 p-4 ">
      <div className="flex items-center justify-between sm:mt-10 mt-0">
      <TypographyTableH2 >Users</TypographyTableH2>
      <AddUserDialog>
        <Button variant={"outline"}><PlusIcon/> Add New User</Button>
          </AddUserDialog>

      </div>
      <UsersTable />
    </div>

  )
}

export default UsersPage
