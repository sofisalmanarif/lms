import { AppSidebar } from "@/components/app-sidebar"
import { LinraryRequestTable } from "@/components/Dashboard/LibraryRequestTable"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"


export function NewLibraryRequest() {
  return (
    <div className="sm:px-20 px-4 mt-0 max-h-[93vh] bg-orange-100/10">
    <SidebarProvider className="max-h-[60vh">
      <AppSidebar />
      <SidebarInset>
      <header className="sm:hidden flex h-8 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                  <div className="flex items-start gap-2 px-4">
                    <SidebarTrigger className="" />
                   
                  </div>
                </header>
        <div className="flex flex-1 flex-col  max-h-[93vh] sm:gap-4 sm:px-20 gap-0 p-4 ">
          <h1 className="sm:text-4xl text-2xl text-orange-500 sm:mt-10 mt-0">New Requests</h1>
          <LinraryRequestTable/>
        </div>
      </SidebarInset>
    </SidebarProvider>
    </div>
  )
}
