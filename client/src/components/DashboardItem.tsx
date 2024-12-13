import {  User2Icon } from "lucide-react"


const DashboardItem = () => {
  return (
    <div className="flex text-black h-12 w-56 text-md  items-center rounded-md justify-start gap-4 px-4">
        <User2Icon/> <p className=" mt-1">Profile</p>
    </div>
  )
}

export default DashboardItem