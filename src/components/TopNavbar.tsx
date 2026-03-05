import { Bell, Search } from "lucide-react";
import { useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/schools": "Schools Management",
  "/school-admins": "School Admins",
  "/subscriptions": "Subscriptions",
  "/settings": "Settings",
  "/logs": "Activity Logs",
  "/security": "Security",
};

export function TopNavbar() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-6 bg-card border-b border-border">
      <div className="flex items-center gap-4">
        <div className="pl-12 lg:pl-0">
          <h2 className="page-header text-lg">{title}</h2>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <button className="p-2 rounded-lg hover:bg-muted transition-colors">
          <Search className="w-[18px] h-[18px] text-muted-foreground" />
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
          <Bell className="w-[18px] h-[18px] text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-3 ml-2 pl-3 border-l border-border">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-xs font-semibold text-primary-foreground">SA</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium leading-none">Super Admin</p>
            <p className="text-xs text-muted-foreground">admin@eduadmin.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
