import {
  Card,
  CardTitle,
} from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import { Link } from "react-router-dom"


export function GenerCard() {
  return (
    <Card className="sm:min-w-[300px] min-w-[170px]">
      {/* <CardHeader> */}
      <Link to={"/gener/hay"}>
        <CardTitle className=" flex items-center justify-between sm:py-4 sm:px-4 sm:text-[16px] text-xs py-2 px-2">Create project
             <div  className=" flex items-center justify-center flex-col sm:gap-2 gap-1">
                <div className="bg-primary sm:h-8 p-1 sm:w-8 w-6 h-6 flex items-center justify-center rounded-full text-secondary"><BookOpen size={20}/></div>
                <p className=" font-light text-xs">125 Books</p>
            </div></CardTitle>
      
      </Link>
     
    </Card>
  )
}
