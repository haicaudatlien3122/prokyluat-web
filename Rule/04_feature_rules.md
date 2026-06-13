# FEATURE RULES

## 1. Dashboard
- Phải có: Hôm nay cần làm gì, thói quen nào giữ streak, số phút tập trung, chi tiêu trong ngày/tháng, cảnh báo trễ hạn.

## 2. Hằng ngày
- Là màn hình thực thi nhanh: Checklist công việc, check thói quen nhanh, bắt đầu Pomodoro nhanh, nhập chi tiêu siêu tốc.

## 3. Công việc (Tasks)
- Chức năng: Thêm/Sửa/Xóa, đặt Deadline, Mức ưu tiên. Trạng thái: Chưa làm, đang làm, hoàn thành, quá hạn.

## 4. Thói quen (Habits)
- Chức năng: Thêm/Sửa/Xóa.
- **Streak:** Phải có tính toán `Current Streak` và `Best Streak`.
- **Hiển thị:** Không hiển thị dạng text xấu (VD: `3 / 20`) nếu chưa được người dùng duyệt UI. Nên hiển thị trực quan.
- **Lịch sử:** Kể cả khi Current Streak bị đứt, `Best Streak` vẫn phải giữ lại đúng kỷ lục cao nhất trong lịch sử.

## 5. Pomodoro / Rừng cây
- **Lưu dữ liệu:** Chỉ khi **hoàn thành** session mới được phép cộng phút và lưu dữ liệu.
- **Mở khóa:** Popup nhận cây mới phải thiết kế đẹp, không bị cắt xén ảnh.

## 6. Tài chính
- Nếu chỉ có 1 giao dịch, **vẫn phải hiển thị dữ liệu và biểu đồ**.
- Khi thiếu dữ liệu để vẽ xu hướng, chỉ hiển thị dòng chữ: `"Chưa đủ dữ liệu để so sánh xu hướng"`, tuyệt đối **không được che khuất nội dung chính**.

## 7. Cài đặt
- Nơi cấu hình Profile, Theme (Dark/Light) và quản lý liên kết tài khoản/API Keys.
