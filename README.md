# AI TaskFlow - Todo App với AI Assistant

Todo List app hiện đại được xây dựng với React và tích hợp AI Claude để gợi ý công việc thông minh.

## 🎨 Tính năng chính

### ✅ Quản lý công việc cơ bản
- Thêm/xóa/hoàn thành công việc
- Phân loại theo danh mục (Công việc, Cá nhân, Sức khỏe, Học tập)
- Đặt độ ưu tiên (Cao, Trung bình, Thấp)
- Ước tính thời gian hoàn thành
- Lưu trữ tự động với localStorage

### 🤖 Tính năng AI
1. **AI Gợi ý thông tin**: Tự động phân tích và bổ sung mô tả, danh mục, độ ưu tiên cho công việc
2. **Gợi ý công việc mới**: AI đề xuất 3 công việc mới dựa trên danh sách hiện tại
3. **Phân tích năng suất**: AI đưa ra lời khuyên để cải thiện hiệu suất làm việc

### 📊 Thống kê & Báo cáo
- Tổng số công việc
- Số công việc đang làm
- Số công việc hoàn thành
- Tỷ lệ hoàn thành

## 📁 Cấu trúc file

```
todo-ai-app/
├── index.html              # File HTML chính
├── styles.css              # Toàn bộ CSS styling
├── App.js                  # Component chính của app
├── components/
│   ├── TaskItem.js         # Component hiển thị từng task
│   ├── TaskForm.js         # Form thêm task mới
│   ├── AIAssistant.js      # AI assistant panel
│   └── Stats.js            # Component thống kê
└── utils/
    └── aiService.js        # Service gọi Claude API

```

## 🚀 Cách sử dụng

1. **Mở file `index.html`** trong trình duyệt web

2. **Tính năng AI sẽ hoạt động tự động** - không cần API key vì đây là artifact trên Claude.ai

3. **Thêm công việc mới**:
   - Nhập tên công việc
   - Nhấn "✨ AI Gợi ý" để AI tự động bổ sung thông tin
   - Hoặc tự điền thông tin thủ công
   - Nhấn "➕ Thêm công việc"

4. **Sử dụng AI Assistant**:
   - Nhấn "💡 Gợi ý công việc" để nhận 3 gợi ý mới
   - Nhấn vào gợi ý để thêm ngay vào danh sách
   - Nhấn "📊 Phân tích" để nhận lời khuyên cải thiện năng suất

## 🎨 Thiết kế

- **Font chữ**: Montserrat + Be Vietnam Pro (hỗ trợ tiếng Việt tốt)
- **Theme**: Dark mode với gradient màu hiện đại
- **Animations**: Smooth transitions và effects
- **Responsive**: Tương thích mobile và desktop

## 🔧 Công nghệ sử dụng

- **React 18**: UI framework
- **Claude AI API**: AI assistant
- **LocalStorage**: Lưu trữ dữ liệu
- **CSS3**: Styling với animations
- **Vanilla JavaScript**: Không cần build tools

## 💡 Lưu ý

- Ứng dụng hoạt động hoàn toàn offline (trừ tính năng AI)
- Dữ liệu được lưu trong localStorage của trình duyệt
- AI features chỉ hoạt động khi chạy trên Claude.ai
- Nếu chạy local, cần thêm API key Anthropic vào `aiService.js`

## 📝 Ví dụ sử dụng

1. Thêm task: "Hoàn thành báo cáo"
2. Nhấn "AI Gợi ý" → AI tự động thêm:
   - Mô tả: "Hoàn thiện và nộp báo cáo công việc tháng"
   - Danh mục: Công việc
   - Độ ưu tiên: Cao
   - Thời gian: 2 giờ

3. Nhấn "Gợi ý công việc" → AI đề xuất:
   - "Nghỉ ngơi 15 phút" (Sức khỏe - Thấp)
   - "Đọc email và phản hồi" (Công việc - Trung bình)
   - "Lên kế hoạch ngày mai" (Cá nhân - Trung bình)

## 🎯 Tips sử dụng hiệu quả

- Sử dụng AI để tiết kiệm thời gian phân loại công việc
- Để AI phân tích khi có ít nhất 5 công việc
- Thường xuyên xem lời khuyên từ AI để cải thiện năng suất
- Chia nhỏ công việc lớn thành nhiều task nhỏ

---

Made with ❤️ using React + Claude AI
