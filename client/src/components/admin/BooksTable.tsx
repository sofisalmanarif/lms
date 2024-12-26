import {ColumnDef,} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import DataTable from "../Dashboard/DataTable"
import { useTableConfig } from "@/hooks/use-table"

const data: BookType[] = [
  { id: "jehyerwu7", img: "/book.png", name: "You Dont't Know js", author: "salmanauthor", stock: 73774674, availableStock: 2 },
  { id: "aiwopei28", img: "/book.png", name: "You Dont't Know js", author: "aisha@example.com", stock: 83927541, availableStock: 1 },
  { id: "jehyerwu7", img: "/book.png", name: "You Dont't Know js", author: "salmanauthor", stock: 73774674, availableStock: 66 },
  { id: "aiwopei28", img: "/book.png", name: "You Dont't Know js", author: "aisha@example.com", stock: 83927541, availableStock: 99 },
  { id: "jehyerwu7", img: "/book.png", name: "You Dont't Know js", author: "salmanauthor", stock: 73774674, availableStock: 1 },
  { id: "aiwopei28", img: "/book.png", name: "You Dont't Know js", author: "aisha@example.com", stock: 83927541, availableStock: 111 },
  { id: "jehyerwu7", img: "/book.png", name: "ahmad", author: "salmanauthor", stock: 73774674, availableStock: 22 },
  { id: "aiwopei28", img: "/book.png", name: "You Dont't Know js", author: "aisha@example.com", stock: 83927541, availableStock: 11 },
  { id: "jehyerwu7", img: "/book.png", name: "You Dont't Know js", author: "salmanauthor", stock: 73774674, availableStock: 1 },
  { id: "aiwopei28", img: "/book.png", name: "Aisha", author: "aisha@example.com", stock: 83927541, availableStock: 34 },
  { id: "jehyerwu7", img: "/book.png", name: "You Dont't Know js", author: "salmanauthor", stock: 73774674, availableStock: 44 },
  { id: "aiwopei28", img: "/book.png", name: "Aisha", author: "aisha@example.com", stock: 83927541, availableStock: 55 },
  { id: "jehyerwu7", img: "/book.png", name: "Salman", author: "salmanauthor", stock: 73774674, availableStock: 555 },
  { id: "aiwopei28", img: "/book.png", name: "Aisha", author: "aisha@example.com", stock: 83927541, availableStock: 90 },

]

export type BookType = {
  id: string,
  img: string
  name: string
  author: string,
  stock: number,
  availableStock: number
}

export const columns: ColumnDef<BookType>[] = [
  {
    accessorKey: "img",
    header: "Image",
    cell: ({ row }) => (
      <img src={row.getValue("img")} className="h-14 text-centre"></img>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize my-5">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "author",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Author
          <ArrowUpDown size={15} />
        </span>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("author")}</div>,
  },
  {
    accessorKey: "stock",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total Stock
          <ArrowUpDown size={15} />
        </span>
      )
    },
    cell: ({ row }) => <div >{row.getValue("stock")}</div>,
  },

  {
    accessorKey: "availableStock",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Available Stock
          <ArrowUpDown size={15} />
        </span>
      )
    },
    cell: ({ row }) => <div >{row.getValue("availableStock")}</div>,
  },

  {
    id: "actions",
    header: () => <div className="text-right">Action</div>,
    enableHiding: false,
    cell: ({ }) => {


      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="text-right" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>

              <DropdownMenuSeparator />
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem className="text-blue-400 focus:text-blue-500 ">Edit</DropdownMenuItem>
              <DropdownMenuItem className="text-red-400 focus:text-red-500">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  }
]

export function BooksTable() {
  const table = useTableConfig({ data, columns })    //custom hook for table congiguration

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search Library By Name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm bg-white"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border bg-white px-2">
        <DataTable columns={columns} table={table} />
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
