import SummaryCards from "./components/SummaryCards"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Tổng quan hôm nay</h2>
          <p className="text-muted-foreground">
            Cập nhật tiến độ kỷ luật cá nhân của bạn.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Thêm công việc
          </Button>
        </div>
      </div>
      
      {/* Thẻ thống kê */}
      <SummaryCards />

      {/* Khu vực chi tiết (sẽ phát triển sau) */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-xl border bg-card text-card-foreground shadow p-6 flex items-center justify-center min-h-[300px]">
          <p className="text-muted-foreground">Biểu đồ tiến độ (Phase tới)</p>
        </div>
        <div className="col-span-3 rounded-xl border bg-card text-card-foreground shadow p-6 flex items-center justify-center min-h-[300px]">
          <p className="text-muted-foreground">Danh sách công việc (Phase tới)</p>
        </div>
      </div>
    </div>
  )
}
