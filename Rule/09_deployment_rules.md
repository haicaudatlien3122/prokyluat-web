# DEPLOYMENT RULES

## 1. Nguyên tắc Deploy
- Luôn phải chạy thành công lệnh build production (`npm run build`) trước khi tiến hành deploy.
- Không bao giờ deploy khi project còn tồn tại lỗi build.
- **Deploy pipeline ban đầu và preview deploy được phép (và bắt buộc) làm ngay từ Phase -1 / Phase 0A**.
- Phase 7 chỉ là quá trình polish và final deployment, không phải là lần setup deploy đầu tiên.

## 2. Biến môi trường
- File `.env.local` chứa các secret (Supabase Service Key, Gemini API Key) tuyệt đối **không được commit** lên GitHub/Repository.
- Khi deploy, bắt buộc phải thiết lập các biến môi trường trực tiếp trên dashboard của Vercel.

## 3. Kiểm tra Production
- Sau khi deploy thành công, bắt buộc phải truy cập và test trực tiếp trên **link production thật** do Vercel cấp.
- Đảm bảo bản production hoạt động giống với bản local và không dính lỗi CORS hay thiếu Environment Variables.
