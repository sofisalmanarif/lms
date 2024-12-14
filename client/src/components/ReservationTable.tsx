import {
    Table,
    TableBody,
    TableCell,
    
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "./ui/button"
  
  const invoices = [
    {
      img: "/book.png",
      bookName: "You don't know js",
      bookingTime: "10:21",
      RemaningTime: "21 min",
    },
    {
        img: "/book.png",
        bookName: "You don't know js",
        bookingTime: "10:21",
        RemaningTime: "21 min",
      },
      {
        img: "/book.png",
        bookName: " js",
        bookingTime: "10:21",
        RemaningTime: "21 min",
      },
      {
        img: "/book.png",
        bookName: "You don't know js",
        bookingTime: "10:21",
        RemaningTime: "21 min",
      },
    
  ]
  
  export function ReservationTable() {
    return (
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Book Image</TableHead>
            <TableHead className="sm:inline-block mt-4 hidden">Book Name</TableHead>
            <TableHead>Booking Time</TableHead>
            <TableHead className="">Remaning Time</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.bookName}>
              <TableCell className=""><img src={invoice.img} alt="" /></TableCell>
              <TableCell className="font-semibold  mt-3 sm:block hidden">{invoice.bookName}</TableCell>
              <TableCell>{invoice.bookingTime}</TableCell>
              <TableCell className="text-red-600 ">{invoice.RemaningTime}</TableCell>
              <TableCell><Button onClick={()=>console.log(invoice.RemaningTime)} size={"sm"} variant={'outline'}>view</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    )
  }
  