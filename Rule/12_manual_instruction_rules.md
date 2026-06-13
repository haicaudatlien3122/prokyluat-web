# LUẬT HƯỚNG DẪN NGƯỜI MỚI KHI CẦN USER TỰ THAO TÁC

Khi AI cần người dùng tự thao tác các bước ngoài quyền của AI (như GitHub, Vercel, Supabase, tạo API key, cấu hình biến môi trường, deploy, đăng nhập tài khoản, cấp quyền, upload file, tạo project cloud), AI tuyệt đối **không được hướng dẫn chung chung**.

## 1. Các kiểu hướng dẫn CẤM SỬ DỤNG
- Vào GitHub tạo repo.
- Vào Vercel import project.
- Vào Supabase lấy API key.
- Cấu hình env rồi deploy.
- Tự làm theo hướng dẫn trên web.

## 2. Các yêu cầu BẮT BUỘC
Phải hướng dẫn kiểu "cầm tay chỉ việc":
1. Nói rõ mục tiêu của bước đó là gì.
2. Nói rõ người dùng cần mở trang nào.
3. Nói rõ bấm nút nào, nằm ở đâu.
4. Nói rõ điền ô nào, điền nội dung gì.
5. Nói rõ file nào cần mở, dòng nào cần sửa.
6. Nói rõ copy giá trị nào, dán vào đâu.
7. Nói rõ sau khi làm đúng thì màn hình phải hiện gì.
8. Nói rõ nếu không thấy nút/khác giao diện thì thử cách nào.
9. Nói rõ lỗi thường gặp và cách xử lý.
10. Chia thành từng bước nhỏ, không gom nhiều thao tác vào một câu.

## 3. Báo cáo giới hạn quyền hạn của AI
Khi AI không thể tự làm do thiếu quyền, AI phải báo rõ:
- Việc nào AI đã làm được.
- Việc nào AI không thể tự làm.
- Lý do không thể tự làm.
- Người dùng cần làm từng bước cụ thể ra sao.
- Sau khi làm xong cần gửi lại thông tin gì cho AI.

## 4. Mẫu hướng dẫn bắt buộc
Bước 1: Mở trang ...
Bước 2: Bấm nút ...
Bước 3: Nhập ...
Bước 4: Bấm ...
Bước 5: Kiểm tra thấy ...
Nếu lỗi ... thì làm ...

## 5. Những điều cấm khác
- Không được chỉ đưa link rồi bảo người dùng tự tìm.
- Không được nói "lấy API key" mà không chỉ rõ API key nằm ở menu nào.
- Không được nói "cấu hình biến môi trường" mà không chỉ rõ tên biến, giá trị lấy ở đâu, dán vào ô nào.
- Không được nói "deploy lên Vercel" mà không chỉ rõ thao tác Import Project, chọn repo, framework, build command, output directory, environment variables và bấm Deploy.
