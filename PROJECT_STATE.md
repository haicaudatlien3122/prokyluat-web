# PROJECT STATE — ProKyLuat Web App

## 1. Mục tiêu dự án
ProKyLuat Web App là web app kỷ luật cá nhân miễn phí 100%, dùng Vite + React + TypeScript + TailwindCSS + shadcn/ui + Supabase + Gemini API + Vercel.

Người dùng muốn test trực tiếp bằng link Vercel, chỉ cần F5/reload, trên cả PC và điện thoại. Không muốn phải chạy local để kiểm tra UI/logic.

## 2. Bộ luật bắt buộc phải đọc trước khi làm

AI tiếp theo bắt buộc đọc:

### 5 file luật nền
- d:\all vibe code\ai-skills.md
- d:\all vibe code\project-rules.md
- d:\all vibe code\task.md
- d:\all vibe code\walkthrough.md
- d:\all vibe code\workflow.md

### 13 file Rule dự án
- Rule/00_project_overview.md
- Rule/01_architecture_rules.md
- Rule/02_ui_ux_rules.md
- Rule/03_database_supabase_rules.md
- Rule/04_feature_rules.md
- Rule/05_ai_coach_rules.md
- Rule/06_verification_workflow.md
- Rule/07_phase_workflow.md
- Rule/08_file_cleanup_rules.md
- Rule/09_deployment_rules.md
- Rule/10_project_specific_strict_rules.md
- Rule/11_vercel_supabase_first_rules.md
- Rule/12_manual_instruction_rules.md

Nếu thiếu file nào thì phải báo rõ, không được tự đoán.

## 3. Trạng thái hiện tại

Current status:

```txt
WAITING USER REVIEW
```

Hiện tại mới hoàn tất bước tạo/cập nhật Rule.

Chưa được phép code app chính nếu người dùng chưa duyệt.

## 4. Phase hiện tại

Phase hiện tại:

```txt
Before Phase -1 / Phase 0A
```

Phase tiếp theo được đề xuất:

```txt
Phase -1 / Phase 0A — Cloud Setup & Deploy Pipeline
```

## 5. Việc đã làm

* Đã tạo bộ Rule riêng cho ProKyLuat Web App.
* Đã bổ sung luật Vercel-first.
* Đã bổ sung luật Supabase-first.
* Đã bổ sung quy trình user test bằng F5 trên link Vercel.
* Đã xác định Phase -1 / Phase 0A phải chạy trước Phase 0.

## 6. Việc chưa làm

* Chưa khởi tạo Vite project.
* Chưa cài TailwindCSS.
* Chưa cài shadcn/ui.
* Chưa tạo React Router.
* Chưa tạo layout thật.
* Chưa tạo repo GitHub, nếu chưa có.
* Chưa kết nối Vercel, nếu chưa có.
* Chưa cấu hình Supabase project, nếu chưa có.
* Chưa tạo `.env.local`.
* Chưa tạo `.env.example`.
* Chưa làm Dashboard.
* Chưa làm Pomodoro.
* Chưa làm Tasks/Habits.
* Chưa làm Finance.
* Chưa làm Gemini AI Coach.

## 7. Thông tin cần người dùng cung cấp hoặc xác nhận

AI phải kiểm tra các thông tin sau trước khi bắt đầu Phase -1/0A:

1. Thư mục làm việc chính xác:

   * `c:\Users\HCDL\Desktop\kyluat_web`

2. GitHub:

   * Đã có repo chưa?
   * Nếu chưa có, cần tạo repo mới tên gì?

3. Vercel:

   * Người dùng đã đăng nhập Vercel chưa?
   * Có muốn nối trực tiếp GitHub repo vào Vercel không?

4. Supabase:

   * Đã có Supabase project chưa?
   * Nếu chưa, phải hướng dẫn từng bước tạo project.
   * Cần lấy:

     * `VITE_SUPABASE_URL`
     * `VITE_SUPABASE_ANON_KEY`

5. Gemini:

   * Chưa cần ở Phase -1/0A nếu chưa làm AI Coach.

## 8. Luật làm tiếp

AI tiếp theo phải làm theo thứ tự:

1. Đọc 5 file luật nền.
2. Đọc 13 file Rule dự án.
3. Đọc file `PROJECT_STATE.md`.
4. Báo lại hiểu đúng trạng thái.
5. Chỉ đề xuất bước tiếp theo.
6. Chỉ bắt đầu Phase -1/0A khi người dùng duyệt.

## 9. Không được làm

* Không được tự nhảy sang Phase 0.
* Không được tự làm Dashboard.
* Không được tự làm Pomodoro.
* Không được tự làm Finance.
* Không được tự làm AI Coach.
* Không được deploy nếu chưa có project/repo/env rõ ràng.
* Không được báo PASS nếu chưa có bằng chứng chạy thật.

## 10. Bước tiếp theo sau khi người dùng duyệt

Bắt đầu:

```txt
Phase -1 / Phase 0A — Cloud Setup & Deploy Pipeline
```

Mục tiêu Phase -1/0A:

* Tạo/chốt repo GitHub.
* Kết nối Vercel.
* Tạo placeholder app tối thiểu.
* Deploy được lên Vercel.
* Cấu hình Supabase project hoặc hướng dẫn người dùng tạo Supabase.
* Tạo `.env.example`.
* Cấu hình biến môi trường Vercel nếu đã có Supabase key.
* Trả về link Vercel để người dùng test bằng F5 trên PC và điện thoại.

## 11. Trạng thái cuối file

```txt
WAITING USER REVIEW
```
