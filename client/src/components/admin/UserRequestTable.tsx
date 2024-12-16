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

const data: User[] = [
    { id: "jehyerwu7", name: "Salman", email: "salman@gmail.com", contactNumber: 73774674, location: "Karachi" },
    { id: "aiwopei28", name: "Aisha", email: "aisha@example.com", contactNumber: 83927541, location: "Lahore" },
    { id: "rtyesl003", name: "Ahmed", email: "ahmed@example.com", contactNumber: 12345987, location: "Islamabad" },
    { id: "zpoieaw44", name: "Zara", email: "zara@example.com", contactNumber: 74930458, location: "Faisalabad" },
    { id: "mnvoeap22", name: "Bilal", email: "bilal@example.com", contactNumber: 47285936, location: "Peshawar" },
    { id: "weuriuq78", name: "Farah", email: "farah@example.com", contactNumber: 63572840, location: "Multan" },
    { id: "xwerpas91", name: "Ali", email: "ali@example.com", contactNumber: 78239546, location: "Quetta" },
    { id: "sdkepow88", name: "Hassan", email: "hassan@example.com", contactNumber: 84620571, location: "Sialkot" },
    { id: "fgeirpa72", name: "Maria", email: "maria@example.com", contactNumber: 28374659, location: "Hyderabad" },
    { id: "vnmseor61", name: "Omar", email: "omar@example.com", contactNumber: 56482901, location: "Rawalpindi" },
    { id: "jwlpueas33", name: "Samina", email: "samina@example.com", contactNumber: 90384756, location: "Gujranwala" },
    { id: "zcxwer88a", name: "Saad", email: "saad@example.com", contactNumber: 24563789, location: "Sukkur" },
    { id: "vmsdoe45n", name: "Nadia", email: "nadia@example.com", contactNumber: 75893046, location: "Abbottabad" },
    { id: "asdjke82o", name: "Hiba", email: "hiba@example.com", contactNumber: 92384657, location: "Bahawalpur" },
    { id: "cvnmseq23", name: "Usman", email: "usman@example.com", contactNumber: 57638492, location: "Sargodha" },
    { id: "qweopzx99", name: "Anum", email: "anum@example.com", contactNumber: 48263790, location: "Gilgit" },
    { id: "bvcnxzq87", name: "Talha", email: "talha@example.com", contactNumber: 83629547, location: "Mardan" },
    { id: "qweoiur44", name: "Irfan", email: "irfan@example.com", contactNumber: 59384627, location: "Muzaffarabad" },
    { id: "asdkler12", name: "Sana", email: "sana@example.com", contactNumber: 63829475, location: "Jhelum" },
    { id: "nbvczqp08", name: "Hafsa", email: "hafsa@example.com", contactNumber: 83729456, location: "Chitral" },
  ]

export type User = {
  id: string
  name: string
  email: string,
  contactNumber: number,
  location :string
}

export const columns: ColumnDef<User>[] = [

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
        <span
         className="flex items-center gap-2 cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown  size={15}/>
        </span>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "contactNumber",
    header: () => <div className="">Contact Number</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("contactNumber")}</div>
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
    cell: ({ row }) => {
      const library = row.original;
      console.log(library)
  
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
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => console.log()} className="text-blue-400 focus:text-blue-500">Accept</DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log()} className="text-red-400 focus:text-red-500"> Reject</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  }
]

export function UserRequestTable() {
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
    onPaginationChange:setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination

    },
  })
  console.log("Current Page Index:", table.getState().pagination.pageIndex);
  console.log("admins Total Pages:", table.getPageCount());

  return (
    <div className="w-full overflow-x-scroll">
      <div className="flex items-center py-2">
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
      <div className="rounded-md border bg-white w-full overflow-x-scroll px-2">
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
