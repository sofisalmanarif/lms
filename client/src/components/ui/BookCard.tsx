 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"


const BookCard = () => {
    return (
        <Card className="sm:w-[300px] w-[170px] p-2">
          <CardHeader className="sm:py-4 p-1">
          </CardHeader>
            <img src="/book.png" className="sm:h-32 sm:w-full h-20 w-full" alt="" />
          <CardContent className="flex flex-col px-2 sm:py-2 py-1 my-2" >
            <h4 className="text-black px-2 text-center sm:text-sm text-xs flex items-center justify-center bg-yellow-200/50 w-auto mx-auto rounded-md mb-2 ">Programing</h4>
            <div className="text-xs sm:text-sm flex flex-col sm:my-2 ">
            <span>Name: You Don't know js</span>
            <span>Author:Kyle Simpson</span>
            </div>
          </CardContent>
          <CardFooter className="w-full mx-0 sm:p-2 pb-1 ">
            <Button  className="w-full">Reserve Now</Button>
          </CardFooter>
        </Card>
        )
}

export default BookCard