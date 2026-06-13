# UI/UX RULES

## 1. Bố cục tổng thể
- **Desktop:** Mỗi màn hình chính phải hiển thị gọn trong 1 viewport, hạn chế tối đa việc phải cuộn trang.
- **Mobile:** Giao diện phải responsive rõ ràng, chia card hợp lý (Mobile được phép cuộn).

## 2. Thẩm mỹ & Trải nghiệm
- **Theme:** Bắt buộc hỗ trợ **Dark Mode** và **Light Mode**.
- **Màu sắc:** Không dùng các màu sắc quá chói lóa. Tone màu phải tinh tế, hiện đại.
- **Dashboard:** Không nhồi quá nhiều card thống kê làm rối mắt. Thông tin phải có phân cấp ưu tiên rõ ràng.
- **Empty State:** Phải thiết kế đẹp, thân thiện, không bao giờ để màn hình trống trơn khi không có dữ liệu.

## 3. Biểu đồ & Thống kê
- Các biểu đồ (Recharts) phải cực kỳ dễ đọc, không trang trí rườm rà quá mức.
- Phải hiển thị tốt ngay cả khi ít dữ liệu.

## 4. Xác minh UI
- Mỗi khi có thay đổi về UI, **phải kiểm chứng bằng giao diện chạy thực tế** (chụp ảnh, chạy test trên trình duyệt).
- Tuyệt đối không được kết luận "Xong" chỉ dựa vào việc build/compile không có lỗi.
