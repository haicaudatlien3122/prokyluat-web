# DATABASE & SUPABASE RULES

## 1. Cấu hình & Schema
- Sử dụng **Supabase Auth** cho việc đăng nhập/đăng xuất.
- Database: **PostgreSQL**.
- Schema bắt buộc phải có các bảng: `profiles`, `tasks`, `habits`, `habit_completions`, `focus_sessions`, `plant_rewards`, `finance_transactions`, `daily_notes`.

## 2. Bảo mật (Row Level Security - RLS)
- **Bắt buộc** phải bật RLS trên tất cả các bảng lưu dữ liệu người dùng.
- Nguyên tắc: **Mỗi user chỉ được phép xem, thêm, sửa, xóa dữ liệu của chính họ.**
- Phải có Policy rõ ràng dựa trên `auth.uid()`.

## 3. Quản lý API Keys
- Không được làm lộ **Service Role Key** ở frontend.
- Frontend chỉ được phép sử dụng **Anon Key**.
- File `.env.local` chứa các key bí mật tuyệt đối **không được commit** lên GitHub.
- Luôn phải có file `.env.example` chứa tên biến làm tài liệu tham khảo.

## 4. Xử lý khi thiếu thông tin
- Supabase project nên được cấu hình sớm trước khi làm chức năng dữ liệu thật.
- Nếu chưa có Supabase key, AI phải hướng dẫn người dùng tạo Supabase project từng bước rõ ràng.
- Khi người dùng chưa có key, tạm thời có thể làm mock data nhưng ưu tiên chốt cấu hình Supabase và các biến môi trường (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) trên Vercel càng sớm càng tốt.
