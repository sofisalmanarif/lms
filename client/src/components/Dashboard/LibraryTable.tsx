import { ColumnDef } from "@tanstack/react-table"
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
import DataTable from "./DataTable"
import { useTableConfig } from "@/hooks/use-table"

const data: Library[] = [
  { id: "jehyerwu7", name: "Salman", email: "salman@gmail.com", licenceNo: 73774674, location: "Karachi" },
  { id: "aiwopei28", name: "Aisha", email: "aisha@example.com", licenceNo: 83927541, location: "Lahore" },
  { id: "rtyesl003", name: "Ahmed", email: "ahmed@example.com", licenceNo: 12345987, location: "Islamabad" },
  { id: "zpoieaw44", name: "Zara", email: "zara@example.com", licenceNo: 74930458, location: "Faisalabad" },
  { id: "mnvoeap22", name: "Bilal", email: "bilal@example.com", licenceNo: 47285936, location: "Peshawar" },
  { id: "weuriuq78", name: "Farah", email: "farah@example.com", licenceNo: 63572840, location: "Multan" },
  { id: "xwerpas91", name: "Ali", email: "ali@example.com", licenceNo: 78239546, location: "Quetta" },
  { id: "sdkepow88", name: "Hassan", email: "hassan@example.com", licenceNo: 84620571, location: "Sialkot" },
  { id: "fgeirpa72", name: "Maria", email: "maria@example.com", licenceNo: 28374659, location: "Hyderabad" },
  { id: "vnmseor61", name: "Omar", email: "omar@example.com", licenceNo: 56482901, location: "Rawalpindi" },
  { id: "jwlpueas33", name: "Samina", email: "samina@example.com", licenceNo: 90384756, location: "Gujranwala" },
  { id: "zcxwer88a", name: "Saad", email: "saad@example.com", licenceNo: 24563789, location: "Sukkur" },
  { id: "vmsdoe45n", name: "Nadia", email: "nadia@example.com", licenceNo: 75893046, location: "Abbottabad" },
  { id: "asdjke82o", name: "Hiba", email: "hiba@example.com", licenceNo: 92384657, location: "Bahawalpur" },
  { id: "cvnmseq23", name: "Usman", email: "usman@example.com", licenceNo: 57638492, location: "Sargodha" },
  { id: "qweopzx99", name: "Anum", email: "anum@example.com", licenceNo: 48263790, location: "Gilgit" },
  { id: "bvcnxzq87", name: "Talha", email: "talha@example.com", licenceNo: 83629547, location: "Mardan" },
  { id: "qweoiur44", name: "Irfan", email: "irfan@example.com", licenceNo: 59384627, location: "Muzaffarabad" },
  { id: "asdkler12", name: "Sana", email: "sana@example.com", licenceNo: 63829475, location: "Jhelum" },
  { id: "nbvczqp08", name: "Hafsa", email: "hafsa@example.com", licenceNo: 83729456, location: "Chitral" },
]

export type Library = {
  id: string
  name: string
  email: string,
  licenceNo: number,
  location: string
}

export const columns: ColumnDef<Library>[] = [

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
    cell: ({ row }) => {
      const library = row.original;

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
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(library.id)}
              >
                Copy library ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem className="text-red-400 focus:text-red-500">Remove</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  }
]

export function LibraryTable() {

  const table = useTableConfig({ data, columns })    //custom hook for table congiguration

  return (
    <div className="w-ful">
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
