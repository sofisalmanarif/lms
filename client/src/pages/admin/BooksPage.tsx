import { BooksTable } from "@/components/admin/BooksTable"
import { AddBookDialog } from "@/components/dilogs/AddBookDialog"
import { TypographyTableH2 } from "@/components/Typogrphies"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"


export function BooksPage() {
  return (

    <div className="flex flex-1 z-10 flex-col  max-h-[93vh] bg-orange-100/10 sm:gap-4 sm:px-20 gap-0 p-4 ">
      <div className="flex items-center justify-between sm:mt-10 mt-0">
        <TypographyTableH2 >Books</TypographyTableH2>
        <AddBookDialog>
        <Button variant={"outline"}><PlusIcon/> Add Book</Button>
          </AddBookDialog>
      </div>
      <BooksTable />
    </div>

  )
}
