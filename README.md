# HSchool — Landing Page (Next.js)

Landing page cho **Mầm non tư thục song ngữ HSchool** — *Greatness Starts From Here*.

Xây dựng bằng **Next.js 14 (App Router) + TypeScript**. Bộ màu lấy theo logo:
**xanh dương hoàng gia `#3b5cc4`** + trắng, điểm nhấn **vàng `#ffd33d`** từ các poster sự kiện.

## Nội dung trang
- **Hero** — thương hiệu & slogan, CTA đăng ký tham quan.
- **Chương trình học** — Nhà trẻ / Mẫu giáo / Tiền tiểu học (18 tháng – 6 tuổi).
- **Học phí** — 3 gói minh bạch, có gói nổi bật.
- **Sự kiện & Hoạt động** — lấy từ hình thực tế: Gala Xiếc & Ảo thuật Ba Miền,
  Welcome to Ice Cream Town, Ngày Giải phóng miền Nam 30/4, Vui chơi ngoài trời.
- **Thư viện ảnh** — lưới ảnh + lightbox xem ảnh lớn.
- **Vì sao chọn HSchool** — 4 giá trị nổi bật.
- **Liên hệ** — form đăng ký tư vấn + hotline + **Zalo**.

## Bắt đầu
```bash
npm install
npm run dev      # http://localhost:3000
```

Build production:
```bash
npm run build
npm start
```

## Cấu trúc
```
app/
  layout.tsx       # Metadata, fonts, html lang="vi"
  page.tsx         # Bố cục trang (server component)
  globals.css      # Toàn bộ giao diện (màu theo logo)
components/
  Header.tsx       # Thanh điều hướng + menu mobile (client)
  Gallery.tsx      # Thư viện ảnh + lightbox (client)
  ContactForm.tsx  # Form đăng ký + tích hợp Google Form (client)
  ScrollReveal.tsx # Hiệu ứng xuất hiện khi cuộn (client)
lib/
  site.ts          # Thông tin trường, chương trình, học phí, sự kiện...
public/assets/     # Logo + hình các sự kiện
```

## Tùy chỉnh
- **Thông tin trường / hotline / email / Zalo:** sửa trong `lib/site.ts`.
- **Học phí, chương trình, sự kiện, thư viện:** cũng nằm trong `lib/site.ts`.
- **Màu sắc:** sửa biến trong `:root` ở đầu `app/globals.css`.

### Kết nối form vào Google Form
Mở `components/ContactForm.tsx`, điền vào hằng `GOOGLE_FORM`:
1. Tạo Google Form với câu hỏi: Họ tên, SĐT, Độ tuổi, Lời nhắn.
2. Dùng "Get pre-filled link" để lấy các `entry.xxxxx`.
3. Dán URL dạng `.../formResponse` vào `action` và các `entry id` vào `fields`.

Khi `action` còn rỗng, form chạy ở chế độ demo (chỉ hiện thông báo cảm ơn).
