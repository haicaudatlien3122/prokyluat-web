# ARCHITECTURE RULES

## 1. Công nghệ (Tech Stack)
- Kiến trúc bắt buộc: **Vite + React + TypeScript**.
- Không được tự ý thay đổi tech stack nếu không có sự cho phép.

## 2. Cấu trúc thư mục
Đề xuất cấu trúc cơ bản rõ ràng:
- `/components`: UI Component tái sử dụng.
- `/pages` hoặc `/features`: Các trang hoặc tính năng.
- `/hooks`: Custom hooks xử lý logic.
- `/services`: Giao tiếp API, Supabase.
- `/lib` hoặc `/utils`: Các hàm tiện ích, cấu hình.

## 3. Nguyên tắc viết Code
- **Tách file:** Không nhồi nhét logic phức tạp hoặc UI quá dài vào một file lớn. Phải tách nhỏ thành các Component, Hook, Service riêng biệt.
- **Dữ liệu thật/giả:** Tuyệt đối không hardcode dữ liệu giả thành dữ liệu thật trong production. Mock data chỉ dùng để thiết kế UI ban đầu và phải được thay thế.

## 4. Tích hợp API / AI
- **Bảo mật Key:** Không được gọi trực tiếp Gemini API hoặc các API yêu cầu secret key từ phía Frontend nếu có nguy cơ lộ key.
- Ưu tiên gọi các dịch vụ này thông qua **Supabase Edge Functions** hoặc serverless function.
