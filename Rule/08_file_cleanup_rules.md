# FILE CLEANUP RULES

## 1. Nguyên tắc dọn rác
- Tuyệt đối không để lại file rác trong dự án sau khi hoàn thành một task.
- Mọi file `test/debug tạm` (như `test.js`, `dummy.json`, component nháp) phải được **xóa ngay** sau khi sử dụng xong.
- Không để sót các file ảnh chụp test tạm thời, log thừa (`console.log`), hoặc script rác trong thư mục dự án.

## 2. Rà soát trước khi báo cáo
- Trước khi báo "Hoàn thành" (done/pass), AI phải chủ động rà lại các file mới tạo trong lần commit/task vừa rồi để xóa những thứ không cần thiết.

## 3. Ngoại lệ
- Nếu buộc phải giữ lại một file rác/ảnh chụp làm bằng chứng, AI **phải báo cáo rõ lý do** trong bảng tổng kết cuối task cho người dùng biết.
