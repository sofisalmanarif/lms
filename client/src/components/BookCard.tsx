 
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
// import { TypographyP } from "./Typogrphies"
import { Book } from "@/data/data"


const BookCard = ({book}:{book?:Book}) => {
    return (
        <div className="md:w-[16vw] border-[1px] border-gray-200  rounded-lg md:max-w-[18vw] min-w-[45.2vw] md:min-w-[17vw]  max-w-[47vw]  md:h-[40vh] min-h-[31vh]   md:max-h-[60vh] place-items-stretch mb-0 p-2 sm:pb-4 ">
          <Link to={`/book/${book?.id}`} className="md:h-[10vw] h-[45%] w-full bg-gray-300/50  rounded-md flex items-center justify-between">

            <img src={book?.image} className="md:h-[8vw]  mx-auto h-24 " alt="" />
          </Link>
          <div className="flex flex-col justify-evenly  md:h-[35%] h-[40%] px-1 sm:py-2 py-1 my-t" >
            <p className="text-green-500 px-1 text-center sm:text-sm text-[8px] block items-center justify-center bg-green-200/25 border-[1px]  border-green-300 w-auto mx-auto rounded-md mb-1  ">{book?.genre}</p>
            <div className="text-xs text-gray-600 sm:text-sm flex flex-col sm:my-2 ">
  
            <p className="mb-2">
            Name: {book?.title}
              </p>            
              
              <p className="mb-2">
              Author: {book?.author}
              </p>
            {/* <span>Edition:Kyle Simpson</span> */}
            </div>
          </div>
          <div className="w-full mx-0 sm:p-0 mt-1   bg-red-200 ">
            
            <Button  variant={"default"} size={"sm"} className="w-full font-semibold mb-0">Reserve Book</Button>
          </div>
        </div>
        )
}

export default BookCard