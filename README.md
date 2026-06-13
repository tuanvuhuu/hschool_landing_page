# HSchool — Landing Page

Landing page cho **Mầm non tư thục song ngữ HSchool** — *Greatness Starts From Here*.

Trang được thiết kế theo bộ màu của logo: **xanh dương hoàng gia (#3b5cc4)** + trắng, điểm nhấn **vàng (#ffd33d)** lấy từ các poster sự kiện.

## Nội dung trang
- **Hero** — giới thiệu thương hiệu & slogan, CTA đăng ký tham quan.
- **Chương trình học** — Nhà trẻ / Mẫu giáo / Tiền tiểu học (18 tháng – 6 tuổi).
- **Sự kiện & Hoạt động** — lấy từ các hình thực tế:
  - Gala Xiếc & Ảo thuật Ba Miền
  - Welcome to Ice Cream Town
  - Chào mừng Ngày Giải phóng miền Nam 30/4
  - Hoạt động vui chơi ngoài trời
- **Vì sao chọn HSchool** — chương trình đặc sắc, rèn luyện tự tin, kết nối bạn bè, kỷ niệm đáng nhớ.
- **Liên hệ** — form đăng ký tư vấn + hotline.

## Công nghệ
Thuần HTML + CSS + JavaScript, không cần build. Mở trực tiếp `index.html` là chạy.

## Chạy thử
```bash
# Mở trực tiếp
open index.html

# hoặc chạy server tĩnh
python3 -m http.server 8080
# rồi mở http://localhost:8080
```

## Cấu trúc
```
.
├── index.html        # Nội dung trang
├── styles.css        # Giao diện (màu theo logo)
├── script.js         # Menu mobile, scroll reveal, xử lý form
└── assets/           # Logo + hình các sự kiện
```

## Tùy chỉnh
- Đổi màu: sửa biến trong `:root` ở đầu `styles.css`.
- Số hotline / email: sửa trong `index.html` (section `#contact` và footer).
- Form hiện xử lý demo phía client — kết nối backend/Google Form khi triển khai thật.
