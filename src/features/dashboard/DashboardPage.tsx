import SummaryCards from "./components/SummaryCards"
import TaskList from "./components/TaskList"
import ProgressChart from "./components/ProgressChart"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 md:space-y-6">
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

      {/* Khu vực chi tiết */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 flex flex-col rounded-xl border bg-card text-card-foreground shadow p-4 md:p-6 min-h-[200px] md:min-h-[300px]">
          <h3 className="font-semibold leading-none tracking-tight mb-2">Biểu đồ tiến độ 7 ngày</h3>
          <p className="text-sm text-muted-foreground mb-4">Mức độ tập trung và hoàn thành mục tiêu.</p>
          <div className="flex-1 flex items-end">
            <ProgressChart />
          </div>
        </div>
        <div className="col-span-3 flex flex-col rounded-xl border bg-card text-card-foreground shadow p-4 md:p-6 min-h-[250px] md:min-h-[300px]">
          <h3 className="font-semibold leading-none tracking-tight mb-2">Danh sách công việc</h3>
          <p className="text-sm text-muted-foreground mb-4">Các task cần hoàn thành trong hôm nay.</p>
          <div className="flex-1 overflow-auto">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  )
}
