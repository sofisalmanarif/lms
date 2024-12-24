import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,

  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreVertical } from "lucide-react"

import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
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

const data: BorrowingType[] = [
  {id:"hghdfghdg", copyId: "jehyerwu7", img: "/book.png", userName: "salman", userEmail: "salmanauthor", borrowingDate: '21-11-24', returnDate: "21-1-25",fine:79 },
  {id:"jhdghsgdf", copyId: "aiwopei28", img: "/book.png", userName: "moomin", userEmail: "aisha@example.com", borrowingDate: '1-9-24', returnDate: "1-1-25",fine:66 },


]

export type BorrowingType = {
  id:string,
  copyId: string,
  img: string
  userName: string
  userEmail: string,
  borrowingDate: string,
  returnDate: string,
  fine:number
}

export const columns: ColumnDef<BorrowingType>[] = [
  {
    accessorKey: "img",
    header: "Image",
    cell: ({ row }) => (
      <img src={row.getValue("img")} className="h-14 text-centre"></img>
    ),
  },
  {
    accessorKey: "userName",
    header: "User Name",
    cell: ({ row }) => (
      <div className="capitalize my-5">{row.getValue("userName")}</div>
    ),
  },
  {
    accessorKey: "userEmail",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User Email
          <ArrowUpDown size={15}/>
        </span>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("userEmail")}</div>,
  },
  {
    accessorKey: "borrowingDate",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Borrowing Date
          <ArrowUpDown size={15} />
        </span>
      )
    },
    cell: ({ row }) => <div >{row.getValue("borrowingDate")}</div>,
  },

  {
    accessorKey: "returnDate",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Return Date
          <ArrowUpDown size={15} />
        </span>
      )
    },
    cell: ({ row }) => <div >{row.getValue("returnDate")}</div>,
  },
  {
    accessorKey: "fine",
    header: ({ column }) => {
      return (
        <span
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fine
          <ArrowUpDown size={15} />
        </span>
      )
    },
    cell: ({ row }) => <div >{row.getValue("fine")}</div>,
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
              <DropdownMenuItem className="text-red-400 focus:text-red-500">Return</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  }
]

export function BorrowingTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })



  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination
    },
  })
  console.log("Current Page Index:", table.getState().pagination.pageIndex);
  console.log("Total Pages:", table.getPageCount());

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search Library By Name..."
          value={(table.getColumn("userName")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("userName")?.setFilterValue(event.target.value)
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
