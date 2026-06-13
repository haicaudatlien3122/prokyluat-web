import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

interface Task {
  id: string
  title: string
  time: string
  completed: boolean
}

const initialTasks: Task[] = [
  { id: "1", title: "Thiền định buổi sáng (15p)", time: "06:00", completed: true },
  { id: "2", title: "Lập trình chức năng mới", time: "08:30", completed: false },
  { id: "3", title: "Tập thể dục (Chạy bộ 3km)", time: "17:00", completed: false },
  { id: "4", title: "Đọc sách kỷ luật tự giác", time: "21:00", completed: false },
]

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="flex flex-col space-y-4">
      {tasks.map((task) => (
        <div 
          key={task.id} 
          className={cn(
            "flex items-center space-x-3 rounded-lg border p-3 transition-colors",
            task.completed ? "bg-muted/50 border-transparent" : "bg-card border-border hover:bg-accent/50"
          )}
        >
          <Checkbox 
            id={`task-${task.id}`} 
            checked={task.completed} 
            onCheckedChange={() => toggleTask(task.id)} 
          />
          <div className="flex flex-1 flex-col">
            <label 
              htmlFor={`task-${task.id}`} 
              className={cn(
                "text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                task.completed ? "line-through text-muted-foreground" : "text-foreground"
              )}
            >
              {task.title}
            </label>
            <span className="text-xs text-muted-foreground mt-1">{task.time}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
