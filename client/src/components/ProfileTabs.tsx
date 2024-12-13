
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TableDemo } from "./TableDemo"

export function ProfileTabs() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-[200px] -ml-4 bg-white grid-cols-2">
        <TabsTrigger value="borrowings">Borrowings</TabsTrigger>
        <TabsTrigger value="reservations">Reservations</TabsTrigger>
      </TabsList>
      {/* <p className="border-b-[1px] border-gray-200 sm:mb-4"></p> */}
      <TabsContent value="borrowings">
        
                    
                    <div className="flex sm:justify-between sm:px-1 px-0 gap-4 w-full py-1  overflow-x-scroll scrollbar-hide">
          <BorrowingBookCard bgColor="#B9CFED" />
          <BorrowingBookCard bgColor="#A0D1F3"/>
          <BorrowingBookCard bgColor="#B9CFED"/>
          <BorrowingBookCard bgColor="#B9CFED"/>
        </div>

      </TabsContent>
      <TabsContent value="reservations">
        <TableDemo/> 
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
        <div>
        <p className="sm:text-md text-sm ml-2">You Don't know js</p>
        <p className="sm:text-xs text-[10px] ml-2">You Don't know js</p>
        </div>
  
      </div>
    )
  }