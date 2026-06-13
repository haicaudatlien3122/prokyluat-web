import { Outlet, NavLink } from "react-router-dom"
import { Compass, Calendar, Wallet, CheckSquare, Menu, ChevronLeft } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function RootLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex h-screen w-full bg-background">
      {/* Sidebar / Bottom Nav for Mobile */}
      <nav className={cn(
        "fixed bottom-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-around border-t border-border bg-card transition-all duration-300 md:static md:h-screen md:flex-col md:justify-start md:border-r md:border-t-0 md:p-4",
        isCollapsed ? "md:w-20" : "md:w-64"
      )}>
        <div className="hidden md:flex md:w-full md:items-center md:justify-between md:py-4">
          {!isCollapsed && <h1 className="text-xl font-bold text-primary truncate">ProKyLuat</h1>}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-md hover:bg-accent text-muted-foreground hover:text-accent-foreground mx-auto"
          >
            {isCollapsed ? <Menu className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
        </div>
        
        <div className="flex w-full justify-around md:flex-col md:space-y-2 md:justify-start md:mt-4">
          <NavItem icon={<Compass className="h-6 w-6" />} label="Tổng quan" isCollapsed={isCollapsed} to="/" />
          <NavItem icon={<CheckSquare className="h-6 w-6" />} label="Thói quen" isCollapsed={isCollapsed} to="/habits" />
          <NavItem icon={<Calendar className="h-6 w-6" />} label="Pomodoro" isCollapsed={isCollapsed} to="/pomodoro" />
          <NavItem icon={<Wallet className="h-6 w-6" />} label="Tài chính" isCollapsed={isCollapsed} to="/finance" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-16 md:pb-0">
        <header className="sticky top-0 z-40 flex h-16 items-center border-b border-border bg-background/80 px-4 backdrop-blur-md">
          <h2 className="text-lg font-semibold">Bảng điều khiển</h2>
        </header>
        <div className="container mx-auto p-4 md:p-6 max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

function NavItem({ icon, label, isCollapsed, to }: { icon: React.ReactNode; label: string; isCollapsed?: boolean; to: string }) {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => cn(
        "flex flex-col items-center justify-center space-y-1 rounded-lg p-2 transition-colors md:flex-row md:justify-start md:space-y-0 md:p-3 md:w-full",
        isActive 
          ? "bg-primary/10 text-primary font-medium" 
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        isCollapsed ? "md:justify-center md:space-x-0" : "md:space-x-3"
      )}
      title={label}
    >
      {icon}
      <span className={cn(
        "text-[10px] md:text-sm",
        isCollapsed ? "hidden" : "block"
      )}>
        {label}
      </span>
    </NavLink>
  )
}
