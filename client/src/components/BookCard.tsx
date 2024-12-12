 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"


const BookCard = () => {
    return (
        <Card className="sm:w-[300px] min-w-[170px] p-2 sm:pb-4">
          <div className="sm:h-44 h-24  flex items-center justify-between">

            <img src="/book.png" className="sm:h-36 sm:w-full h-20 w-full" alt="" />
          </div>
          <CardContent className="flex flex-col px-1 sm:py-2 py-1 my-2" >
            <p className="text-green-500 px-1 text-center sm:text-sm text-[8px] block items-center justify-center bg-green-200/25 border-2 border-green-300 w-auto mx-auto rounded-md mb-2  ">Programing</p>
            <div className="text-xs text-gray-600 sm:text-sm flex flex-col sm:my-2 ">
            <span>Name: You Don't know js</span>
            <span>Author:Kyle Simpson</span>
            {/* <span>Edition:Kyle Simpson</span> */}
            </div>
          </CardContent>
          <div className="w-full mx-0 sm:p-2 pb-1 ">
            <Button  variant={"default"} className="w-full font-semibold">Reserve Book</Button>
          </div>
        </Card>
        )
}

export default BookCard