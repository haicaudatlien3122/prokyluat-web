import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckSquare, Flame, Timer, Wallet } from "lucide-react"

export default function SummaryCards() {
  const mockData = [
    {
      title: "Công việc",
      value: "12 / 15",
      description: "Đã hoàn thành hôm nay",
      icon: <CheckSquare className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Chuỗi thói quen",
      value: "5 ngày",
      description: "Đang duy trì tốt",
      icon: <Flame className="h-4 w-4 text-orange-500" />,
    },
    {
      title: "Pomodoro",
      value: "4.5 giờ",
      description: "Tập trung tuần này",
      icon: <Timer className="h-4 w-4 text-blue-500" />,
    },
    {
      title: "Quỹ thưởng",
      value: "+150,000đ",
      description: "Số dư hiện tại",
      icon: <Wallet className="h-4 w-4 text-green-500" />,
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
      {mockData.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {item.title}
            </CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
