import { UsersTable } from "@/components/admin/UsersTable"


export function UsersPage() {
  return (

    <div className="flex flex-1 z-10 flex-col  max-h-[93vh] bg-orange-100/10 sm:gap-4 sm:px-20 gap-0 p-4 ">
      <h1 className="sm:text-4xl text-2xl text-orange-500 sm:mt-10 mt-0">Users</h1>
      <UsersTable />
    </div>

  )
}
