import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"

function Placeholder() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4 rounded-xl border border-dashed border-border bg-card/50 p-8 text-center animate-in fade-in zoom-in duration-500">
      <h3 className="text-2xl font-bold text-primary">Chào mừng đến với ProKyLuat</h3>
      <p className="max-w-md text-muted-foreground">
        Hệ thống đang được khởi tạo. Đây là giao diện Placeholder. 
        Giao diện này hoàn toàn Responsive và sử dụng Vector UI (Lucide Icons) kết hợp Tailwind CSS.
      </p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Placeholder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
