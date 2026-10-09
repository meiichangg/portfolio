# Portfolio — Vũ Thị Mai Trang (Chang.cee)

Website portfolio tĩnh (HTML/CSS/JS thuần, **không có bước build**). Chủ sở hữu: UI/UX Designer, giao tiếp bằng tiếng Việt — trả lời bằng tiếng Việt.

## 3 phiên bản, dùng chung nội dung
| Đường dẫn | Phong cách | File riêng |
|---|---|---|
| `/` (`index.html`, `project.html`, `writing.html`, `article.html`) | Bản 1 — tối giản (Yuya): trắng/đen, Inter, tên khổng lồ, nhãn `work.` | `assets/css/style.css`, `assets/js/main.js` |
| `/polo/` | Bản 2 — card tối (Polo): card bo góc, menu viên thuốc, FAQ | `polo/polo.css`, `polo/polo.js`, `polo/content-polo.js` |
| `/mix/` | Bản 3 — kết hợp 1 + 2, nhiều animation nhất (màn chờ, rèm, con trỏ, tilt 3D) | nạp `../polo/polo.css` rồi ghi đè bằng `mix/mix.css`; logic ở `mix/mix.js` |

Cả ba bản render toàn bộ trang bằng JS từ dữ liệu — HTML gần như rỗng (`<main id="app">`).

## Nội dung (sửa ở đây, cả 3 bản cùng cập nhật)
- `assets/js/content.js`
  - `SITE`: tên, email, ngày sinh, **link Behance/Facebook (đang trống)**, `avatar` (đang trống → hiện monogram)
  - `I18N`: chuỗi giao diện
  - `ABOUT`: kỹ năng, công cụ, hành trình, quy trình
  - `PROJECTS`: 7 case study (slug, ảnh, problem/goal/flow/decisions/money/states/gallery/palette…)
  - `BEYOND`: 3 khung "đang cập nhật" (dashboard, hệ thống quản lý, dự án nhà nước)
  - `ARTICLES`: 5 bài viết (body là HTML)
- `polo/content-polo.js`: chuỗi + dữ liệu riêng bản 2/3 (dịch vụ, so sánh "vì sao chọn mình", số liệu, FAQ)
- Mọi đoạn chữ có **3 ngôn ngữ** qua helper `L(vi, en, zh)`. Khi thêm/sửa chữ, luôn viết đủ cả vi, en, zh.

## Ảnh
- `assets/img/projects/<slug>/<tên>.webp` — ảnh màn hình (rộng ~780px, WebP chất lượng 80).
- Trong `PROJECTS`, tham chiếu ảnh **bằng tên không có đuôi** (vd. `"onb1"`).
- Thư mục `project/` (file Figma/PDF gốc, ~1.8GB) **không có trên GitHub** — chỉ tồn tại trên máy của chủ sở hữu.

## Quy ước
- Mặc định **dark mode**; người dùng đổi theme/ngôn ngữ được lưu trong localStorage.
- Thư viện qua CDN, đã ghim phiên bản: GSAP 3.12.5 + ScrollTrigger (cdnjs), Lenis 1.1.13 (unpkg). Font Google: Inter, Be Vietnam Pro/Bricolage (bản 1), Plus Jakarta Sans (bản 2), Noto Sans SC.
- Animation chỉ bật khi có GSAP và người dùng không bật "giảm chuyển động"; trang vẫn hiện đủ nội dung khi thiếu GSAP.
- Không bịa số liệu, lời khen khách hàng hay tên công ty.

## Việc còn mở
- Điền link Behance, Facebook; thêm ảnh chân dung (`assets/img/avatar.jpg` rồi đặt `SITE.avatar`).
- Danno Music mới có key visual, chưa có màn hình app (`placeholder: true`).
- Bổ sung dự án thật cho dashboard / hệ thống quản lý / dự án nhà nước.
- Chủ sở hữu cần kiểm tra lại: hành trình theo năm, danh sách công cụ, nền tảng & mô hình kiếm tiền của từng app.

## Xem thử
- Trên máy: `python -m http.server 5500` rồi mở `http://localhost:5500/` (hoặc `/polo/`, `/mix/`).
- Sau khi kiểm tra trên trình duyệt (desktop 1280px và mobile 375px, không tràn ngang), mới commit.
