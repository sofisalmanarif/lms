import { AppSidebar } from "@/components/app-sidebar"
import { AdminLibraryTable } from "@/components/Dashboard/AdminLibraryTable"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function SuperAdminLibraries() {
  return (
    <div className="sm:px-20 px-4 mt-0 h-[90vh]">
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <h1 className="text-4xl text-orange-500">Libraries</h1>
          <AdminLibraryTable/>
        </div>
      </SidebarInset>
    </SidebarProvider>
    </div>
  )
}
