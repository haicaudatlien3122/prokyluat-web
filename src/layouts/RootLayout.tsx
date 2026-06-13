import { Outlet } from "react-router-dom"
import { Compass, Calendar, Wallet, CheckSquare } from "lucide-react"

export default function RootLayout() {
  return (
    <div className="flex h-screen w-full bg-background">
      {/* Sidebar / Bottom Nav for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-around border-t border-border bg-card md:static md:h-screen md:w-64 md:flex-col md:justify-start md:border-r md:border-t-0 md:p-4">
        <div className="hidden md:flex md:w-full md:items-center md:justify-center md:py-6">
          <h1 className="text-xl font-bold text-primary">ProKyLuat</h1>
        </div>
        
        <div className="flex w-full justify-around md:flex-col md:space-y-2 md:justify-start">
          <NavItem icon={<Compass className="h-6 w-6" />} label="Tổng quan" />
          <NavItem icon={<CheckSquare className="h-6 w-6" />} label="Thói quen" />
          <NavItem icon={<Calendar className="h-6 w-6" />} label="Pomodoro" />
          <NavItem icon={<Wallet className="h-6 w-6" />} label="Tài chính" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-16 md:pb-0">
        <header className="sticky top-0 z-40 flex h-16 items-center border-b border-border bg-background/80 px-4 backdrop-blur-md">
          <h2 className="text-lg font-semibold">Bảng điều khiển</h2>
        </header>
        <div className="container mx-auto p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center justify-center space-y-1 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:flex-row md:justify-start md:space-x-3 md:space-y-0 md:p-3 md:w-full">
      {icon}
      <span className="text-[10px] font-medium md:text-sm">{label}</span>
    </button>
  )
}
