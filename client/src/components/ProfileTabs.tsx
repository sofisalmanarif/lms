
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ReservationTable } from "./ReservationTable"
import { TypographySmall } from "./Typogrphies"

export function ProfileTabs() {
  return (
    <Tabs defaultValue="reservations" className="w-full">
      <TabsList className="grid w-[200px] -ml-3 px-0 bg-white grid-cols-2">
        <TabsTrigger value="reservations" className="sm:px-0 px-0"><TypographySmall>Reservations</TypographySmall></TabsTrigger>
        <TabsTrigger value="borrowings"><TypographySmall>Borrowings</TypographySmall></TabsTrigger>
      </TabsList>
      <p className="border-b-[1px] border-gray-200 sm:mb-4"></p>
      <TabsContent value="borrowings">
        
                    
                    <div className="flex sm:justify-between sm:px-1 px-0 gap-4 w-full py-1  overflow-x-scroll scrollbar-hide">
          <BorrowingBookCard bgColor="#B9CFED" />
          <BorrowingBookCard bgColor="#A0D1F3"/>
          <BorrowingBookCard bgColor="#B9CFED"/>
          <BorrowingBookCard bgColor="#B9CFED"/>
        </div>

      </TabsContent>
      <TabsContent value="reservations">
        <ReservationTable/> 
      </TabsContent>
    </Tabs>
  )
}



function BorrowingBookCard({bgColor}:{bgColor:string}){
    return(
      <div className="sm:w-[400px] sm:max-w-[400px] min-w-[200px] max-w-[200px]  flex flex-col gap-2 ">
        <div className={`flex items-center  w-[100%] backdrop:blur-sm justify-center bg-${bgColor} rounded-3xl py-4 shadow-sm`} style={{backgroundColor:bgColor}}>
          <img src="/book.png" alt="" />
  
        </div>
        <div className="flex flex-col gap-1">
        
        <TypographySmall>You Don't know js</TypographySmall>
        <TypographySmall >You Don't know js</TypographySmall>
        </div>
  
      </div>
    )
  }