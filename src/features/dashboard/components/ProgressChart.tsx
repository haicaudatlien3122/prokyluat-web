import { cn } from "@/lib/utils"

export default function ProgressChart() {
  // Mock data representing the last 7 days of progress (0-100%)
  const chartData = [
    { day: "T2", value: 65 },
    { day: "T3", value: 80 },
    { day: "T4", value: 40 },
    { day: "T5", value: 90 },
    { day: "T6", value: 75 },
    { day: "T7", value: 50 },
    { day: "CN", value: 85 },
  ]

  return (
    <div className="flex h-40 md:h-64 w-full items-end justify-between space-x-2 pt-4">
      {chartData.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-end w-full group">
          <div className="relative flex w-full justify-center">
            {/* Tooltip on hover */}
            <span className="absolute -top-8 hidden rounded-md bg-foreground px-2 py-1 text-xs text-background group-hover:block transition-opacity">
              {item.value}%
            </span>
            {/* Bar */}
            <div 
              className={cn(
                "w-full max-w-[40px] rounded-t-md bg-primary/20 transition-all duration-500 group-hover:bg-primary/40",
                item.value >= 80 ? "bg-primary/80 group-hover:bg-primary" : ""
              )}
              style={{ height: `${item.value}%` }}
            />
          </div>
          <span className="mt-2 text-xs font-medium text-muted-foreground">
            {item.day}
          </span>
        </div>
      ))}
    </div>
  )
}
