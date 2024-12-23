import { BooksTable } from "@/components/admin/BooksTable"
import { AddBookDialog } from "@/components/dilogs/AddBookDialog"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"


export function BooksPage() {
  return (

    <div className="flex flex-1 z-10 flex-col  max-h-[93vh] bg-orange-100/10 sm:gap-4 sm:px-20 gap-0 p-4 ">
      <div className="flex items-center justify-between sm:mt-10 mt-0">
        <h1 className="sm:text-4xl text-2xl text-orange-500  mt-0">Books</h1>
        <AddBookDialog>
        <Button variant={"outline"}><PlusIcon/> Add Book</Button>
          </AddBookDialog>
      </div>
      <BooksTable />
    </div>

  )
}
