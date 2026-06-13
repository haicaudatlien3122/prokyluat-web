# AI COACH RULES

## 1. Dữ liệu đầu vào
- AI Coach (Gemini) chỉ được phân tích dựa trên **dữ liệu thật** của người dùng.
- **Tuyệt đối không được bịa dữ liệu**.
- Nếu dữ liệu không đủ (ví dụ người dùng chưa dùng đủ 1 tuần), AI phải nói rõ: "Tôi chưa có đủ dữ liệu để phân tích phần này...".

## 2. Prompt và Tối ưu dữ liệu
- Prompt gửi cho AI phải ngắn gọn, có cấu trúc rõ ràng.
- Chỉ tổng hợp những số liệu quan trọng (ví dụ: tổng điểm, task hoàn thành, habit streak), **không gửi nguyên cục dữ liệu thô** quá dài làm chậm và tốn token.

## 3. Bảo mật
- **Tuyệt đối không lộ Gemini API Key** tại frontend. Phải bọc qua backend/edge function.

## 4. Các chế độ bắt buộc của AI Coach
1. **Phân tích hôm nay:** Đánh giá độ hoàn thành trong ngày.
2. **Phân tích tuần này:** Tổng kết xu hướng tuần.
3. **Gợi ý thói quen:** Chỉ ra thói quen đang bị tụt streak hoặc gợi ý cần ưu tiên.
4. **Cảnh báo chi tiêu:** Phát hiện khoản chi vượt mức trung bình.
5. **Động viên:** Đưa ra lời khuyên tâm lý nhẹ nhàng khi người dùng có dấu hiệu tụt giảm hiệu suất.
