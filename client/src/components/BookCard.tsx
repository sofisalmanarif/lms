 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Link } from "react-router-dom"


const BookCard = () => {
    return (
        <Card className="md:w-[16vw] md:max-w-[18vw] min-w-[170px]  max-w-[45vw]    md:max-h-[60vh] place-items-stretch mb-4 p-2 sm:pb-4 ">
          <Link to={"/book/1"} className="md:h-[10vw] h-24 w-full bg-gray-300/50  rounded-md flex items-center justify-between">

            <img src="/book.png" className="md:h-[8vw] md:w-full h-20 w-full" alt="" />
          </Link>
          <CardContent className="flex flex-col px-1 sm:py-2 py-1 my-2" >
            <p className="text-green-500 px-1 text-center sm:text-sm text-[8px] block items-center justify-center bg-green-200/25 border-[1px]  border-green-300 w-auto mx-auto rounded-md mb-2  ">Programing</p>
            <div className="text-xs text-gray-600 sm:text-sm flex flex-col sm:my-2 ">
            <span>Name: You Don't know js</span>
            <span>Author:Kyle Simpson</span>
            {/* <span>Edition:Kyle Simpson</span> */}
            </div>
          </CardContent>
          <div className="w-full mx-0 sm:p-2 pb-1 ">
            <Button  variant={"default"} size={"sm"} className="w-full font-semibold">Reserve Book</Button>
          </div>
        </Card>
        )
}

export default BookCard