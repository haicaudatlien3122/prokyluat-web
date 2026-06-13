# VERCEL & SUPABASE FIRST RULES

## 1. Vercel-first workflow
- Từ đầu dự án phải ưu tiên có link Vercel preview/production để user test trực tiếp.
- Sau mỗi lần sửa UI/logic quan trọng, AI phải build và deploy lên Vercel nếu môi trường cho phép.
- Không được chỉ yêu cầu user test local nếu user đã yêu cầu test trên Vercel.

## 2. Supabase-first workflow
- Supabase project nên được cấu hình sớm (ngay từ Phase -1 / Phase 0A) trước khi làm chức năng dữ liệu thật.
- Nếu chưa có Supabase key, AI phải hướng dẫn người dùng tạo Supabase project từng bước rõ ràng, không hỏi chung chung kiểu "vào Google lấy API".

## 3. Environment Variables
- Khi có key, phải cấu hình `.env.local` ở local và biến môi trường trên dashboard Vercel.
- Không được commit `.env.local`. Phải có `.env.example`.
- Vercel Environment Variables phải có tối thiểu:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
- Gemini key chưa cần ở phase này nếu chưa làm AI Coach.

## 4. User testing bằng F5 trên web thật
- Người dùng không cần chạy local hay thao tác terminal. Người dùng chỉ cần mở link web đã deploy và F5/reload để test.
- AI phải cung cấp link Vercel và dặn người dùng reload (kể cả hard reload nếu cần).

## 5. PC/Mobile testing
- Báo cáo phải nêu rõ những màn cần test trên PC và những màn cần test trên điện thoại.
- Người dùng sẽ test trực tiếp qua link Vercel trên cả hai nền tảng.

## 6. Deploy report format
Báo cáo sau mỗi task phải có:
- Link Vercel user cần mở.
- Nội dung cần F5/reload.
- Những màn cần test trên PC.
- Những màn cần test trên điện thoại.
- Nếu chưa deploy được, phải báo rõ lý do kỹ thuật và trạng thái chỉ được là `PARTIAL PASS`.
