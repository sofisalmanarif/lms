import { AdminSidebar } from "@/components/admin/AdminSidebar";

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

function AdminDashboardLayout() {


  return (

    <SidebarProvider className="w-full sm:px-20 bg-orange-100/10">
      <AdminSidebar />
      <SidebarInset className=" flex-1 w-full">
        <header className="sm:hidden flex h-8 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-start gap-2 px-4">
            <SidebarTrigger className="" />

          </div>
        </header>
        <Outlet />

      </SidebarInset>
    </SidebarProvider>
  );
}


export default AdminDashboardLayout