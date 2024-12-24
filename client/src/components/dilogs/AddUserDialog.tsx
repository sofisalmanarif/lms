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

export function AddUserDialog({children}:{children:React.ReactNode}) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px] w-[90vw] rounded-md">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
        </DialogHeader>
        <form className="grid  gap-4 py-4">
          <div className="grid grid-cols-2  w-full gap-4">
            <div className=" ">
                <Label>User Name</Label>
                <Input type="text" placeholder="" />
            </div>
            <div className="">
                <Label>Email</Label>
                <Input type="text" placeholder="" />
            </div>
          </div>

          <div className="grid grid-cols-2  w-full gap-4">
            <div className=" ">
                <Label>Locatin</Label>
                <Input type="text" placeholder="" />
            </div>
            <div className="">
                <Label>Contact Number</Label>
                <Input type="text" placeholder="" />
            </div>
          </div>

          
        
          <div className="grid grid-cols-2">
          <div className=" ">
                <Label>Valid Document</Label>
                <Input type="file" placeholder="" />
            </div>
          </div>
          
          <DialogFooter>
          <Button type="submit">Add User</Button>
        </DialogFooter>
        </form>
     
      </DialogContent>
    </Dialog>
  )
}


