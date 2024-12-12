import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BookOpen } from "lucide-react"


export function GenerCard() {
  return (
    <Card className="sm:min-w-[300px] min-w-[170px]">
      {/* <CardHeader> */}
        <CardTitle className=" flex items-center justify-between sm:py-4 sm:px-4 text-sm py-2 px-2">Create project
             <div className=" flex items-center justify-center flex-col gap-2">
                <div className="bg-orange-500 sm:h-8 p-1 sm:w-8 w-6 h-6 flex items-center justify-center rounded-full text-white"><BookOpen size={20}/></div>
                <p className=" font-light text-xs">125 Books</p>
            </div></CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      {/* </CardHeader> */}
      
     
    </Card>
  )
}
