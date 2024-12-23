import { ReservationsTable } from "@/components/admin/ReservationsTable"
import { TypographyTableH2 } from "@/components/Typogrphies"



export function BorrowingPage() {
  return (

    <div className="flex flex-1 z-10 flex-col  max-h-[93vh] bg-primary/10 sm:gap-4 sm:px-20 gap-0 p-4 ">
      <TypographyTableH2 >Borrowings</TypographyTableH2>
      
      <ReservationsTable />
    </div>

  )
}
