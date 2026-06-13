# PHASE WORKFLOW

Dự án này chia thành 7 Phase (từ 0 đến 7). Phải tuân thủ tuyệt đối quy định về Phase:

## 1. Nguyên tắc Phase
- **Không nhảy Phase**.
- Phase nào chưa đạt trạng thái `PASS` thì tuyệt đối **không** được sang Phase sau.

## 2. Lộ trình bắt buộc
- **Phase -1 / Phase 0A:** Cloud Setup & Deploy Pipeline (Tạo repo, nối Vercel, cấu hình Supabase, setup env, tạo placeholder app deploy sớm).
- **Phase 0:** Setup project cơ bản (Vite, Tailwind), layout nền tảng. (Không làm Phase 0 nếu chưa thống nhất Phase -1/0A).
- **Phase 1:** Supabase Auth + Database.
- **Phase 2:** Dashboard + Hằng ngày.
- **Phase 3:** Task + Habit.
- **Phase 4:** Pomodoro + Rừng cây.
- **Phase 5:** Tài chính.
- **Phase 6:** Gemini AI Coach.
- **Phase 7:** Polish + Final Deploy (Không phải là lần deploy đầu tiên, deploy pipeline đã có từ Phase -1).

## 3. Báo cáo mỗi Phase
Khi kết thúc một Phase, AI bắt buộc phải báo cáo đầy đủ các mục sau:
1. Đã làm gì (tóm tắt logic).
2. File nào đã được tạo mới / chỉnh sửa / xóa.
3. Đã test những kịch bản nào.
4. Kết quả nghiệm thu (PASS / PARTIAL PASS / FAIL).
5. Người dùng cần kiểm tra gì (Walkthrough).
