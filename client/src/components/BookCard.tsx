 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
import { TypographyP } from "./Typogrphies"
import { Book } from "@/data/data"


const BookCard = ({book}:{book:Book}) => {
    return (
        <Card className="md:w-[16vw] md:max-w-[18vw] min-w-[170px]  max-w-[45vw]    md:max-h-[60vh] place-items-stretch mb-4 p-2 sm:pb-4 ">
          <Link to={`/book/${book.id}`} className="md:h-[10vw] h-24 w-full bg-gray-300/50  rounded-md flex items-center justify-between">

            <img src={book.image} className="md:h-[8vw]  mx-auto h-20 " alt="" />
          </Link>
          <CardContent className="flex flex-col px-1 sm:py-2 py-1 my-2" >
            <p className="text-green-500 px-1 text-center sm:text-sm text-[8px] block items-center justify-center bg-green-200/25 border-[1px]  border-green-300 w-auto mx-auto rounded-md mb-2  ">{book.genre}</p>
            <div className="text-xs text-gray-600 sm:text-sm flex flex-col sm:my-2 ">
  
            <TypographyP className="leading-none">
            Name: {book.title}
              </TypographyP>            
              
              <TypographyP className="leading-3">
              Author: {book.author}
              </TypographyP>
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