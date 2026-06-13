# VERIFICATION WORKFLOW

Sau mỗi lần sửa code (logic hoặc UI), phải tuân thủ quy trình kiểm chứng bắt buộc gồm 2 tầng dưới đây:

## 1. Tầng 1 — Local/internal check của AI
1. Chạy `lint` (nếu có cấu hình).
2. Chạy `typecheck` (nếu dùng TypeScript).
3. Chạy lệnh `build` để đảm bảo code không lỗi khi đóng gói.
4. Chạy app hoặc preview local (`npm run dev` / preview) nếu cần để AI tự xác nhận lỗi không còn tồn tại.

## 2. Tầng 2 — User-facing check trên Vercel
1. Deploy lên Vercel nếu task có thay đổi user-facing.
2. Cung cấp link Vercel cho người dùng.
3. Yêu cầu người dùng F5/reload.
4. Nêu rõ test trên PC cần nhìn thấy gì.
5. Nêu rõ test trên điện thoại cần nhìn thấy gì.
6. Nếu UI đã sửa nhưng Vercel chưa cập nhật, AI phải kiểm tra:
   - Deploy mới đã chạy chưa?
   - Vercel có build lỗi không?
   - Link đang mở có đúng project không?
   - Có cache trình duyệt không? (Có cần hard reload không?)
   - Environment Variables trên Vercel đã đúng chưa?

## 3. Quy định Báo cáo
- Chỉ được báo cáo **PASS** khi đã có bằng chứng chạy thực tế thành công và đã hoàn tất quy trình kiểm thử cả 2 tầng.
- Nếu chỉ mới pass lint/build nhưng chưa deploy được hoặc UI chưa đạt 100%, chỉ được phép ghi **PARTIAL PASS**, tuyệt đối không được báo done. Phải nêu rõ lý do kỹ thuật nếu chưa deploy được.
