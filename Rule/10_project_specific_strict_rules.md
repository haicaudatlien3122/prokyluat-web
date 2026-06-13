# PROJECT SPECIFIC STRICT RULES

## 1. MVP-first rules
- ProKyLuat Web phải làm theo hướng MVP trước.
- Ưu tiên app chạy được với mock/local data trước nếu chưa có Supabase key.
- Không được chặn tiến độ chỉ vì thiếu Supabase hoặc Gemini key. Supabase/Gemini sẽ tích hợp sau đúng phase.
- Không được làm tính năng nâng cao trước khi khung app và CRUD lõi ổn định.

## 2. Phase boundary rules
- **Phase -1 / Phase 0A:** Bắt buộc chạy trước Phase 0 để thiết lập Cloud Setup & Deploy Pipeline (Vercel, Supabase early config). Nếu thiếu thông tin, phải hướng dẫn người dùng từng bước lấy thông tin.
- **Phase 0 chỉ được làm:** Setup Vite + React + TypeScript, TailwindCSS, shadcn/ui, React Router, Layout nền, Sidebar/bottom nav, Theme dark/light, Placeholder page. (Lưu ý: Không được làm Phase 0 nếu chưa thống nhất xong Phase -1/0A).
- **Phase 0 không được làm:** Supabase Auth thật, Database thật, Gemini, Pomodoro logic thật, Finance CRUD thật, Habit streak logic thật.
- Mọi việc ngoài phase phải ghi vào TODO, không được tự ý làm lấn sang.

## 3. Folder architecture rules
Bắt buộc đề xuất cấu trúc thư mục rõ ràng:
```txt
src/
  app/
  components/
  features/
    dashboard/
    daily/
    tasks/
    habits/
    focus/
    finance/
    ai-coach/
    settings/
  hooks/
  lib/
  services/
  types/
  data/
```
Luật:
- Không nhồi quá nhiều logic vào `App.tsx`.
- Không để component dài quá mức.
- Logic module nào nằm trong feature module đó.
- Shared component mới để trong `components/`.
- API/Supabase/Gemini service để trong `services/` hoặc `lib/`.
- Type dùng chung để trong `types/`.

## 4. Data state rules
Mỗi màn có dữ liệu phải có đủ:
- Loading state.
- Empty state.
- Error state.
- Success state.

Mock data:
- Mock data phải nằm riêng trong `src/data` hoặc file mock rõ tên.
- Không được trộn mock data vào logic production.
- Khi chuyển sang Supabase phải xóa hoặc cô lập mock data.

## 5. Supabase schema strict rules
Khi tới Phase 1, bắt buộc:
- Có file SQL schema/migration riêng.
- Bật RLS cho tất cả bảng user data.
- Có policy theo `auth.uid()`.
- Có index cho `user_id`.
- Có index cho các trường ngày hay truy vấn nhiều.
- `habit_completions` phải chống check trùng cùng ngày.
- Tiền không được lưu bằng kiểu float gây sai số.
- Timestamp/date phải xử lý rõ timezone.
- Không được dùng service role key ở frontend.

## 6. Feature strict rules
**Tasks:**
- Có filter hôm nay, tuần này, quá hạn, hoàn thành.
- Có trạng thái rõ ràng.
- Không để task quá hạn bị lẫn với task hôm nay.

**Habits:**
- Không cho check trùng một habit trong cùng một ngày.
- Current streak và best streak phải tính từ lịch sử thật.
- Best streak không mất khi current streak bị đứt.
- UI streak phải đẹp, không dùng kiểu `3 / 20` nếu chưa được duyệt.

**Focus/Pomodoro:**
- Có start/pause/resume/reset.
- Chỉ session hoàn thành mới lưu.
- Session hủy không cộng phút.
- Popup nhận cây mới phải đẹp, ảnh không bị cắt.
- Nếu dùng 6 giai đoạn cây thì phải map rõ theo mốc thời gian.

**Finance:**
- Thu/chi phải tách rõ.
- Có category.
- Chỉ 1 giao dịch vẫn phải hiện nội dung.
- Thiếu dữ liệu xu hướng chỉ ghi chú, không được che nội dung.
- Không tính toán sai số tiền do kiểu dữ liệu không phù hợp.

**AI Coach:**
- Có fallback khi Gemini lỗi hoặc hết quota.
- Không bịa dữ liệu.
- Không đưa lời khuyên tài chính kiểu chuyên gia đầu tư.
- Output phải ngắn, thực dụng, có hành động đề xuất.

## 7. UI verification strict rules
Khi sửa UI phải kiểm tra ít nhất:
- Desktop width.
- Mobile/narrow width.
- Dark mode.
- Light mode.
- Empty state nếu màn đó có dữ liệu.

Không được báo UI pass nếu chưa mở đúng route và nhìn thấy đúng text/component mới.

## 8. Report format strict rules
Sau mỗi task/phase, báo cáo bắt buộc có:
```md
## Status
PASS / PARTIAL PASS / FAIL / WAITING USER REVIEW

## Scope
Đã làm trong phạm vi nào.

## Files changed
- Created:
- Modified:
- Deleted:

## Verification
- Lệnh đã chạy:
- Kết quả:
- UI đã kiểm tra:
- Logic đã kiểm tra:

## Evidence
- Mô tả bằng chứng chạy thực tế.
- Nếu có ảnh/log thì ghi rõ file nào giữ lại.

## Cleanup
- File rác đã xóa:
- File giữ lại và lý do:

## Next step
- Chỉ đề xuất bước tiếp theo.
- Không tự làm bước tiếp theo nếu chưa được duyệt.
```

## 9. Stop condition
Sau khi hoàn thành rule này phải dừng lại chờ người dùng duyệt (WAITING USER REVIEW). Không được tự ý tiến sang Phase -1/0A hoặc Phase 0.
