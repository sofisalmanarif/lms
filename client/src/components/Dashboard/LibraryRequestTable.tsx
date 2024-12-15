import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: Library[] = [
    { id: "jehyerwu7", img:"/book.png", name: "Salman", email: "salman@gmail.com", licenceNo: 73774674, location: "Karachi" },
    { id: "aiwopei28",img:"/book.png", name: "Aisha", email: "aisha@example.com", licenceNo: 83927541, location: "Lahore" },
    { id: "jehyerwu7", img:"/book.png", name: "Salman", email: "salman@gmail.com", licenceNo: 73774674, location: "Karachi" },
    { id: "aiwopei28",img:"/book.png", name: "Aisha", email: "aisha@example.com", licenceNo: 83927541, location: "Lahore" },
    { id: "jehyerwu7", img:"/book.png", name: "Shahla", email: "salman@gmail.com", licenceNo: 73774674, location: "Karachi" },
    { id: "aiwopei28",img:"/book.png", name: "aaahil", email: "aisha@example.com", licenceNo: 83927541, location: "Lahore" },
    { id: "jehyerwu7", img:"/book.png", name: "ahmad", email: "salman@gmail.com", licenceNo: 73774674, location: "Karachi" },
    { id: "aiwopei28",img:"/book.png", name: "Aisha", email: "aisha@example.com", licenceNo: 83927541, location: "Lahore" },
    { id: "jehyerwu7", img:"/book.png", name: "Salman", email: "salman@gmail.com", licenceNo: 73774674, location: "Karachi" },
    { id: "aiwopei28",img:"/book.png", name: "Aisha", email: "aisha@example.com", licenceNo: 83927541, location: "Lahore" },
    { id: "jehyerwu7", img:"/book.png", name: "Salman", email: "salman@gmail.com", licenceNo: 73774674, location: "Karachi" },
    { id: "aiwopei28",img:"/book.png", name: "Aisha", email: "aisha@example.com", licenceNo: 83927541, location: "Lahore" },
    { id: "jehyerwu7", img:"/book.png", name: "Salman", email: "salman@gmail.com", licenceNo: 73774674, location: "Karachi" },
    { id: "aiwopei28",img:"/book.png", name: "Aisha", email: "aisha@example.com", licenceNo: 83927541, location: "Lahore" },
    
  ]

export type Library = {
  id: string,
  img:string
  name: string
  email: string,
  licenceNo: number,
  location :string
}

export const columns: ColumnDef<Library>[] = [
    {
        accessorKey: "img",
        header: "Valid Document",
        cell: ({ row }) => (
          <img src={row.getValue("img")} className="h-14"></img>
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
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "licenceNo",
    header: () => <div className="">Licence Number</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("licenceNo")}</div>
    ),
  },
  
  {
    accessorKey: "location",
    header: () => <div className="">Location</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("location")}</div>
    ),
  },
  
  {
    id: "actions",
    header: () => <div className="text-right">Action</div>,
    enableHiding: false,
    cell: ({  }) => {

  
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
              <DropdownMenuItem className="text-blue-400 hover:text-green-500">Accept</DropdownMenuItem>
              <DropdownMenuItem className="text-red-400 hover:text-red-500">Raject</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  }
]

export function LinraryRequestTable() {
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
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
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
