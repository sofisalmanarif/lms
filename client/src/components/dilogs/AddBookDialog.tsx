import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddBookDialog({children}:{children:React.ReactNode}) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px] w-[90vw] rounded-md">
        <DialogHeader>
          <DialogTitle>Add New Book</DialogTitle>
        </DialogHeader>
        <form className="grid  gap-4 py-4">
          <div className="grid grid-cols-2  w-full gap-4">
            <div className=" ">
                <Label>Book Name</Label>
                <Input type="text" placeholder="" />
            </div>
            <div className="">
                <Label>Book Author</Label>
                <Input type="text" placeholder="" />
            </div>
          </div>

          <div className="grid grid-cols-2  w-full gap-4">
            <div className=" ">
                <Label>Book Publisher</Label>
                <Input type="text" placeholder="" />
            </div>
            <div className="">
                <Label>Book Genre</Label>
                <Input type="text" placeholder="" />
            </div>
          </div>

          <div className="grid grid-cols-2  w-full gap-4">
            <div className=" ">
                <Label>Edition</Label>
                <Input type="text" placeholder="" />
            </div>
            <div className="">
                <Label>ISBN Number</Label>
                <Input type="text" placeholder="" />
            </div>
          </div>
          <div className="grid grid-cols-2  w-full gap-4">
          
            <div className=" ">
                <Label>Book Price</Label>
                <Input type="text" placeholder="" />
            </div>
            <div className="">
                <Label>Book Stock</Label>
                <Input type="text" placeholder="" />
            </div>
          </div>
          <div className="grid grid-cols-2">
          <div className=" ">
                <Label>Image</Label>
                <Input type="file" placeholder="" />
            </div>
          </div>
          
          <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </form>
     
      </DialogContent>
    </Dialog>
  )
}


