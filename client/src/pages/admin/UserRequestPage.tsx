import { UserRequestTable } from "@/components/admin/UserRequestTable"



export function UsersRequestPage() {
  return (

    <div className="flex flex-1 z-10 flex-col  max-h-[93vh] bg-orange-100/10 sm:gap-4 sm:px-20 gap-0 p-4 ">
      <h1 className="sm:text-4xl text-2xl text-orange-500 sm:mt-10 mt-0">New Users</h1>
      <UserRequestTable />
    </div>

  )
}
