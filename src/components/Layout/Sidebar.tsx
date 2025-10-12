import { NavLink, useNavigate } from "react-router-dom";
import { Home, UtensilsCrossed, Wrench, Bell, User, Settings, LogOut, ChevronLeft, Users, Building2, DollarSign, FileText, UserCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

// Student menu items
const studentNavItems = [
  { title: "Dashboard", url: "/student-dashboard", icon: Home },
  { title: "Meals", url: "/student-dashboard/meals", icon: UtensilsCrossed },
  { title: "Maintenance", url: "/student-dashboard/maintenance", icon: Wrench },
  { title: "Notices", url: "/student-dashboard/notices", icon: Bell },
  { title: "Profile", url: "/student-dashboard/profile", icon: User },
  { title: "Settings", url: "/student-dashboard/settings", icon: Settings },
];

// Warden menu items
const wardenNavItems = [
  { title: "Dashboard", url: "/warden-dashboard", icon: Home },
  { title: "Students", url: "/warden-dashboard/students", icon: Users },
  { title: "Rooms", url: "/warden-dashboard/rooms", icon: Building2 },
  { title: "Maintenance", url: "/warden-dashboard/maintenance", icon: Wrench },
  { title: "Notices", url: "/warden-dashboard/notices", icon: Bell },
  { title: "Profile", url: "/warden-dashboard/profile", icon: User },
  { title: "Settings", url: "/warden-dashboard/settings", icon: Settings },
];

// Admin menu items
const adminNavItems = [
  { title: "Dashboard", url: "/admin-dashboard", icon: Home },
  { title: "Students", url: "/admin-dashboard/students", icon: Users },
  { title: "Wardens", url: "/admin-dashboard/wardens", icon: UserCog },
  { title: "Rooms", url: "/admin-dashboard/rooms", icon: Building2 },
  { title: "Fees", url: "/admin-dashboard/fees", icon: DollarSign },
  { title: "Maintenance", url: "/admin-dashboard/maintenance", icon: Wrench },
  { title: "Notices", url: "/admin-dashboard/notices", icon: Bell },
  { title: "Reports", url: "/admin-dashboard/reports", icon: FileText },
  { title: "Profile", url: "/admin-dashboard/profile", icon: User },
  { title: "Settings", url: "/admin-dashboard/settings", icon: Settings },
];

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const navigate = useNavigate();

  // Get current user role from localStorage
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const userRole = currentUser.role || 'student';

  // Select navigation items based on role
  const navItems = 
    userRole === 'admin' ? adminNavItems :
    userRole === 'warden' ? wardenNavItems : 
    studentNavItems;

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-card border-r border-border transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-full flex-col">
        {/* Logo & Toggle */}
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          {!collapsed && (
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Auto Stay System
            </h1>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="hover:bg-muted"
          >
            <ChevronLeft className={cn("h-5 w-5 transition-transform", collapsed && "rotate-180")} />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-3 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              end={item.url === "/student-dashboard" || item.url === "/warden-dashboard" || item.url === "/admin-dashboard"}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  "hover:bg-muted",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                )
              }
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="border-t border-border p-3">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className={cn(
              "w-full justify-start gap-3 text-muted-foreground hover:text-foreground hover:bg-muted",
              collapsed && "justify-center"
            )}
          >
            <LogOut className="h-5 w-5 shrink-0" />
            {!collapsed && <span>Logout</span>}
          </Button>
        </div>
      </div>
    </aside>
  );
}
