# Portfolio — Vũ Thị Mai Trang (Chang.cee)

Website tĩnh (HTML/CSS/JS thuần, không cần build).
Phong cách tối giản lấy cảm hứng từ yuya.framer.website: nền trắng/đen, font Inter, chữ lớn viết hoa,
nhãn section kiểu `work.`, lưới dự án ô vuông, khối liên hệ + footer nền đen.

## Xem trên máy
```
python -m http.server 5173
```
Mở http://localhost:5173

## Cấu trúc
| File | Nội dung |
|---|---|
| `index.html` | Trang chủ: hero, dự án, ngoài mobile, giới thiệu, quy trình, bài viết, liên hệ |
| `project.html?p=<slug>` | Case study (UX + UI) |
| `writing.html` / `article.html?a=<slug>` | Danh sách & chi tiết bài viết |
| `assets/js/content.js` | **Toàn bộ nội dung 3 ngôn ngữ** — sửa ở đây |
| `assets/js/main.js` | Render, đổi ngôn ngữ, theme sáng/tối, chuyển động |
| `assets/css/style.css` | Giao diện |
| `assets/img/projects/<slug>/` | Ảnh màn hình đã xuất từ PDF/PNG |

## Việc cần làm tiếp
1. **Link Behance / Facebook**: điền `behance`, `facebook` trong `SITE` (đầu file `content.js`).
2. **Ảnh chân dung**: chép vào `assets/img/avatar.jpg`, đặt `avatar: "assets/img/avatar.jpg"`.
3. **Danno Music**: xuất màn hình từ Figma vào `assets/img/projects/danno/`, thêm tên file vào `gallery`, bỏ `placeholder: true`.
4. **Dự án dashboard / hệ thống / nhà nước**: sửa mảng `BEYOND`, hoặc thêm một mục đầy đủ vào `PROJECTS` (copy cấu trúc một dự án có sẵn).
5. Kiểm tra lại các thông tin mình suy luận: hành trình theo năm (`ABOUT.journey`), công cụ (`ABOUT.tools`), nền tảng / mô hình kiếm tiền của từng app.

## Thêm dự án mới
Thêm một object vào `PROJECTS` với `slug`, ảnh đặt tại `assets/img/projects/<slug>/<tên>.webp`, rồi tham chiếu tên ảnh (không cần đuôi) trong `cover`, `decisions[].img`, `states`, `gallery`.

## Đưa lên mạng
Upload mọi thứ **trừ thư mục `project/`** (file nguồn ~1.8GB) lên Netlify / Vercel / GitHub Pages.

## Bản 2 (phong cách Polo) — thư mục `polo/`
Tham khảo portfolo.framer.website: nền gần đen, card bo góc có bóng, menu dạng viên thuốc nổi,
các section Quy trình / Dịch vụ / Vì sao chọn mình / Con số / FAQ.
- Mở: `Mo portfolio (ban 2).bat` hoặc http://localhost:5500/polo/index.html
- Dùng chung `assets/js/content.js` và ảnh với bản 1 → sửa nội dung một chỗ, cả hai bản cùng cập nhật.
- Nội dung riêng của bản 2 (dịch vụ, so sánh, FAQ, số liệu): `polo/content-polo.js`.

## Bản 3 (kết hợp Yuya + Polo) — thư mục `mix/`
Chữ & bố cục kiểu Yuya (tên khổng lồ viết hoa, nhãn `dự án.`, tiêu đề căn trái, lưới 2 cột có tên đè lên ảnh,
footer 3 cột) đặt trên nền card kiểu Polo (nền gần đen, card bo góc có bóng, menu viên thuốc, FAQ).
Chế độ sáng chuyển hẳn sang tinh thần Yuya: nền trắng, card phẳng.
- Mở: `Mo portfolio (ban 3).bat` hoặc http://localhost:5500/mix/index.html
- Dùng lại `polo/polo.css` + ghi đè trong `mix/mix.css`; nội dung dùng chung `assets/js/content.js` và `polo/content-polo.js`.
