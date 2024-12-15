import { AppSidebar } from "@/components/app-sidebar"
// import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function Dashboard() {
  return (
    <div className="sm:px-20 px-4 mt-4 h-[90vh]">
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      <header className="sm:hidden flex h-8 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                  <div className="flex items-start gap-2 px-4">
                    <SidebarTrigger className="" />
                   
                  </div>
                </header>
       
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
    </div>
  )
}
