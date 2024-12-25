import {
  TypographyH1,
  TypographyH4,
  TypographyLead,
  TypographyP,
} from "@/components/Typogrphies";
import { Button } from "@/components/ui/button";
import { Book, books } from "@/data/data";
import { LocateIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => { 
   const [currentBook,SetCurrentBook] = useState<Book>()
   const {id} = useParams()
  useEffect(() => {
    SetCurrentBook(books.filter(book=>book.id ===Number(id))[0])

    console.log("Book id ",id,currentBook)
  
    
  }, [id,currentBook])
  


  return (
    <main className="container mx-auto">

      <div
        className="flex relative items-start justify-start flex-col sm:flex-row sm:p-8 p-2 sm:border-[1px] border-0 border-gray-200 rounded-md
        gap-4"
      >
        <div className="sm:w-[40%] sm:h-[40vh] w-full h-[30vh] border-[1px] border-gray-200 rounded-md flex  items-center justify-center">
          <img src={currentBook?.image} className="h-[90%] w-[45%]" alt="" />
        </div>
        <div className="sm:w-[60%] w-full ">
          <div className="sm:pr-20 pr-5 border-b-[1px] border-gray-300 sm:pb-10 pb-4 py-2 sm:mb-10 mb-6">
            <div className="absolute top-4 right-4">
              <Button className="font-semibold">
                <LocateIcon size={150} />
              </Button>
            </div>
            <TypographyH1>{currentBook?.title}</TypographyH1>
            <div className="text-green-500 px-1 text-center  sm:text-sm text-[10px]  items-center justify-center bg-green-200/25 border-2 border-green-300  w-fit rounded-md mb-1  sm:my-2 ">
            {currentBook?.genre}
            </div>
            <div className="sm:mb-4 mb-2 text-gray-600  sm:text-md text-sm">
              <TypographyH4>{currentBook?.author}</TypographyH4>

              <TypographyLead>
                ISBN Number : {currentBook?.isbn}
              </TypographyLead>
              {/* <h6 className=''>Year of publish : 2004</h6> */}
              <TypographyLead>
                Year of publish : {currentBook?.yearOfPublish}
              </TypographyLead>
              
              <TypographyP className="">
                Description : {currentBook?.description}
              </TypographyP>
            </div>
          </div>
          <Button className="font-semibold">Reserve Book </Button>
        </div>
      </div>
    </main>
  );
};

export default BookDetails;
