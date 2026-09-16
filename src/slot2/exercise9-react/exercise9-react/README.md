# Exercise 9: React Component

Bài làm đầy đủ cho 5 yêu cầu trong đề bài.

## Cấu trúc thư mục

```
src/
├── App.js                     # Ghép tất cả 5 bài lại để xem chung
├── App.css                    # Style cho toàn bộ trang
├── index.js                   # Entry point
└── components/
    ├── Exercise1_Greeting.jsx     # Bài 1: Tên + lời giới thiệu
    ├── Exercise2_HelloWorld.jsx   # Bài 2: "Hello, World!"
    ├── Exercise3_Counter.jsx      # Bài 3: Counter tăng/giảm
    ├── card/                      # Bài 4: Simple Card
    │   ├── Title.jsx               # leaf: hiển thị tiêu đề
    │   ├── Description.jsx         # leaf: hiển thị mô tả
    │   ├── Image.jsx                # leaf: hiển thị ảnh (hoặc "IMG")
    │   └── SimpleCard.jsx          # wrapper: nhận prop `item`
    └── website/                   # Bài 5: Simple Website
        ├── Header.jsx              # logo + nav (Home/About/Contact)
        ├── About.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── SimpleWebsite.jsx      # ghép Header + About + Contact + Footer
```

## Cách chạy thử

```bash
npm install
npm start
```

Ứng dụng sẽ mở tại `http://localhost:3000` và hiển thị lần lượt cả 5 bài.

## Giải thích từng bài

**Bài 1 — Greeting**: component function đơn giản, không nhận props, in ra tên và một đoạn giới thiệu ngắn.

**Bài 2 — HelloWorld**: component tối giản chỉ render `<h1>Hello, World!</h1>`.

**Bài 3 — Counter**: dùng hook `useState` để lưu `count`. Hai hàm `increment`/`decrement` cập nhật state qua callback `prevState => ...` để tránh lỗi khi cập nhật nhiều lần liên tiếp. Có thêm nút Reset cho tiện demo.

**Bài 4 — Simple Card**: xây từ dưới lên (leaf-first) đúng như đề yêu cầu:
- `Title` nhận prop `text`.
- `Description` nhận prop `text`.
- `Image` nhận prop `url` (nếu rỗng thì hiện khung "IMG" giống mockup).
- `SimpleCard` là wrapper, nhận `item = { title, description, imageUrl }` và truyền xuống 3 component con.

**Bài 5 — Simple Website**: tách theo từng "mảng" của trang — `Header` (logo + nav), `About`, `Contact`, `Footer` — rồi `SimpleWebsite` ghép lại thành một trang hoàn chỉnh, giống bố cục cam trong ảnh mẫu.

**Bài 10 — Demo about React-Bootstrap**: dựng lại chính website ở bài 5 nhưng dùng component có sẵn của thư viện `react-bootstrap` thay vì CSS tự viết:
- `Navbar` + `Nav.Link` cho phần header/menu (Home/About/Contact)
- `Container`, `Row`, `Col` cho bố cục lưới responsive
- `Card` cho khối About/Contact

Cần cài thêm 2 gói: `npm install react-bootstrap bootstrap`, và import CSS của Bootstrap 1 lần duy nhất trong `index.js`:
```js
import 'bootstrap/dist/css/bootstrap.min.css';
```
