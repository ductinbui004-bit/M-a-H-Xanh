================================================================================
DỰ ÁN BÀI TẬP LỚN: WEBSITE TĨNH "MÙA HÈ XANH – HÀNH TRÌNH CỐNG HIẾN"
MÔN HỌC: THIẾT KẾ WEB (MMC403)
================================================================================

1. HƯỚNG DẪN MỞ VÀ TRẢI NGHIỆM WEBSITE
- Website được xây dựng hoàn toàn bằng công nghệ Front-end tĩnh (HTML5, CSS3, JavaScript ES6 thuần).
- KHÔNG yêu cầu cài đặt máy chủ (web server), KHÔNG cần cài Node.js, PHP hay bất kỳ môi trường lập trình nào.
- KHÔNG phụ thuộc vào Internet hay bất kỳ thư viện/CDN bên ngoài nào (như Bootstrap, jQuery, Font Awesome, Google Fonts). Website chạy hoàn toàn OFFLINE 100%.
- Cách mở website:
  + Bước 1: Giải nén thư mục MuaHeXanh (nếu đang ở dạng file .zip).
  + Bước 2: Nhấp đúp chuột trực tiếp vào tập tin "index.html" hoặc nhấp chuột phải chọn "Open with" -> chọn bất kỳ trình duyệt web hiện đại nào (Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari).
  + Bước 3: Duyệt qua các trang thông qua thanh menu điều hướng trên cùng.

================================================================================
2. CẤU TRÚC THƯ MỤC WEBSITE (DỰ ÁN MUA HE XANH)
================================================================================
MuaHeXanh/
│
├── index.html                   Trang 1: Trang chủ (Hero banner, 3 Đội hình, 6 Hoạt động, Ấn phẩm truyền thông)
├── muc-tieu-dia-ban.html        Trang 2: Mục tiêu & Địa bàn hoạt động (Giá trị cốt lõi, Ý nghĩa, 5 loại địa bàn)
├── doi-hinh.html                Trang 3: Các đội hình tình nguyện (Chi tiết Đội Môi trường xanh, Tiếp sức, Vì trẻ em)
├── hoat-dong.html               Trang 4: Danh mục hoạt động tình nguyện (Bộ lọc đội hình + Tìm kiếm từ khóa JS)
├── chi-tiet-hoat-dong.html      Trang 5: Chi tiết hoạt động trọng điểm (Mô tả sâu: Trồng cây xanh & Sinh hoạt thiếu nhi)
├── lich-trinh.html              Trang 6: Lịch trình chiến dịch (Bảng lịch trình HTML chuẩn, Điều kiện & Lưu ý an toàn)
├── dang-ky.html                 Trang 7: Đăng ký tham gia (Biểu mẫu 6 trường + Validation JS + Tóm tắt mô phỏng)
├── faq.html                     Trang 8: Câu hỏi thường gặp (10 câu hỏi đóng/mở dạng Accordion tương tác JS)
├── thu-vien.html                Trang 9: Thư viện hình ảnh (15+ ảnh chia 4 chủ đề + Modal Lightbox xem phóng to ảnh)
│
├── css/
│   └── style.css                Bảng kiểu dáng CSS thuần 100%, thiết kế Responsive (1366px, 992px, 768px, 390px)
│
├── js/
│   └── script.js                Mã nguồn JavaScript ES6 thuần xử lý toàn bộ tương tác DOM an toàn và 3 chức năng chính
│
├── images/                      Thư mục lưu trữ tài nguyên hình ảnh chuẩn và các ấn phẩm thiết kế
│   ├── banner.jpg               Sản phẩm thiết kế 1: Banner chủ đạo chiến dịch Mùa Hè Xanh (1920x1080)
│   ├── poster.svg               Poster chiến dịch dạng vector, chữ tiếng Việt rõ nét trên mọi màn hình
│   ├── infographic.svg          Cẩm nang hành trang dạng vector, co giãn theo kích thước màn hình
│   ├── doi-hinh-1.png           Hình ảnh minh họa Đội hình Tiếp sức cộng đồng
│   ├── doi-hinh-2.png           Hình ảnh minh họa Đội hình Môi trường xanh
│   ├── doi-hinh-3.png           Hình ảnh minh họa Đội hình Vì trẻ em
│   ├── dia-ban-1.png            Hình ảnh khảo sát thực địa địa bàn hoạt động
│   ├── dia-ban-2.png            Hình ảnh môi trường sống và giao lưu địa phương
│   ├── hoat-dong-1.jpg .. 7.jpg Ảnh thực tế các hoạt động tình nguyện thực địa
│   └── anh-1.jpg .. 18.jpg      Ảnh tư liệu thư viện chia theo 4 nhóm chủ đề
│
└── README.txt                   Tài liệu hướng dẫn kỹ thuật, phân công thành viên và kiểm thử dự án

================================================================================
3. PHÂN CHIA CÔNG VIỆC TRONG NHÓM (3 SINH VIÊN)
================================================================================
Nhóm gồm 3 thành viên, mỗi thành viên phụ trách chính ít nhất 3 trang HTML, 1 chức năng JavaScript và 1 sản phẩm thiết kế truyền thông:

* Thành viên 1:
  - Phụ trách 3 trang HTML:
    1. index.html (Trang chủ)
    2. muc-tieu-dia-ban.html (Mục tiêu & Địa bàn hoạt động)
    3. doi-hinh.html (Các đội hình tình nguyện)
  - Phụ trách tương tác JavaScript: Chức năng 3A - Accordion FAQ đóng/mở câu hỏi bằng chuột & bàn phím (kết hợp cùng Menu Mobile Toggle).
  - Phụ trách sản phẩm thiết kế truyền thông: Banner chính chủ đạo (banner.jpg).

* Thành viên 2:
  - Phụ trách 3 trang HTML:
    4. hoat-dong.html (Danh mục hoạt động tình nguyện)
    5. chi-tiet-hoat-dong.html (Chi tiết hoạt động trọng điểm)
    6. lich-trinh.html (Lịch trình chiến dịch & Bảng dữ liệu HTML)
  - Phụ trách tương tác JavaScript: Chức năng 1 - Bộ lọc danh sách hoạt động theo đội hình & tìm kiếm từ khóa trực tiếp, hiển thị thông báo khi không có kết quả.
  - Phụ trách sản phẩm thiết kế truyền thông: Poster tuyên truyền chiến dịch (poster.svg).

* Thành viên 3:
  - Phụ trách 3 trang HTML:
    7. dang-ky.html (Biểu mẫu đăng ký tham gia chiến dịch)
    8. faq.html (Câu hỏi thường gặp)
    9. thu-vien.html (Thư viện hình ảnh)
  - Phụ trách tương tác JavaScript: Chức năng 2 - Kiểm tra hợp lệ (Validation) biểu mẫu đăng ký và hiển thị khung tóm tắt thông tin mô phỏng (kết hợp Chức năng 3B - Lightbox modal phóng to ảnh).
  - Phụ trách sản phẩm thiết kế truyền thông: Infographic Cẩm nang hành trang tình nguyện viên (infographic.svg).

================================================================================
4. CHI TIẾT 3 CHỨC NĂNG JAVASCRIPT BẮT BUỘC & KỊCH BẢN KIỂM THỬ
================================================================================

--------------------------------------------------------------------------------
Chức năng 1: BỘ LỌC HOẠT ĐỘNG THEO ĐỘI HÌNH & TÌM KIẾM TỪ KHÓA (Tại hoat-dong.html)
--------------------------------------------------------------------------------
- Vị trí: Trang hoat-dong.html (dòng mã trong js/script.js).
- Cơ chế kỹ thuật:
  + Dữ liệu 6 hoạt động được lưu trữ dưới dạng mảng các đối tượng (Array of Objects).
  + Sử dụng phương thức mảng .filter() kết hợp điều kiện kép: kiểm tra giá trị data-filter và phương thức chuỗi .includes() cho từ khóa tìm kiếm (không phân biệt hoa/thường, loại bỏ khoảng trắng thừa bằng .trim()).
  + Duyệt mảng kết quả bằng .forEach() và tạo các phần tử DOM một cách an toàn bằng document.createElement(), gán textContent, classList và setAttribute().
  + Xử lý trường hợp không có kết quả: Khi độ dài mảng đã lọc list.length === 0, hệ thống tự động hiển thị thẻ thông báo #no-results-alert ("Không tìm thấy hoạt động nào phù hợp!").
- Kịch bản kiểm thử (Test Cases):
  + Test 1.1: Nhấp vào nút "Đội hình Môi trường xanh" -> Hệ thống chỉ hiển thị các hoạt động thuộc Môi trường xanh (Trồng cây xanh, Dọn vệ sinh khu dân cư, Tuyên truyền bảo vệ môi trường).
  + Test 1.2: Gõ từ khóa "thiếu nhi" vào ô tìm kiếm -> Hệ thống hiển thị ngay hoạt động "Tổ chức sinh hoạt thiếu nhi".
  + Test 1.3: Gõ từ khóa không tồn tại "xyz123" -> Hệ thống ẩn các thẻ và hiển thị ngay khung cảnh báo màu vàng "Không tìm thấy hoạt động nào phù hợp!". Bấm nút ✕ để xóa tìm kiếm và khôi phục danh sách đầy đủ.

--------------------------------------------------------------------------------
Chức năng 2: KIỂM TRA BIỂU MẪU ĐĂNG KÝ & HIỂN THỊ TÓM TẮT MÔ PHỎNG (Tại dang-ky.html)
--------------------------------------------------------------------------------
- Vị trí: Trang dang-ky.html (dòng mã trong js/script.js).
- Cơ chế kỹ thuật:
  + Bắt sự kiện 'submit' trên thẻ <form id="volunteer-registration-form">.
  + Ngăn chặn hành vi gửi trang mặc định bằng e.preventDefault().
  + Kiểm tra toàn diện 6 trường dữ liệu:
    * Họ tên: không để trống, trim() kiểm tra chuỗi rỗng/chỉ chứa dấu cách, tối thiểu 3 ký tự.
    * Email: kiểm tra regex chuẩn /^[^\s@]+@[^\s@]+\.[^\s@]+$/.
    * Số điện thoại: kiểm tra regex 10 chữ số tại Việt Nam /^(0[3|5|7|8|9])[0-9]{8}$/.
    * Đội hình: kiểm tra giá trị select khác rỗng.
    * Thời gian: kiểm tra radio button có được chọn (input[name="availability"]:checked).
    * Lý do tham gia: không để trống, trim(), độ dài tối thiểu 10 ký tự.
  + Hiển thị thông báo lỗi trực tiếp bên dưới từng trường bị vi phạm (.error-feedback.visible), thêm viền đỏ .is-invalid và tự động focus vào trường lỗi đầu tiên.
  + Xóa lỗi linh hoạt ngay khi người dùng nhập/chọn lại thông qua sự kiện 'input' và 'change'.
  + Khi tất cả các trường đều hợp lệ: Trích xuất dữ liệu an toàn và cập nhật vào khung tóm tắt #registration-summary thông qua thuộc tính .textContent (TUYỆT ĐỐI KHÔNG dùng innerHTML chèn trực tiếp để phòng chống tấn công XSS).
  + Hiển thị rõ thông báo cảnh báo: "Đây là kết quả hiển thị mô phỏng tại trình duyệt phục vụ học tập môn MMC403, dữ liệu chưa được lưu vào cơ sở dữ liệu thật".
- Kịch bản kiểm thử (Test Cases):
  + Test 2.1: Để trống tất cả các trường và bấm "Gửi đăng ký" -> Tất cả 6 trường đồng loạt hiển thị thông báo lỗi màu đỏ tương ứng.
  + Test 2.2: Nhập email sai định dạng (ví dụ: "abc@") và số điện thoại chỉ có 5 số -> Hệ thống báo lỗi cụ thể cho trường Email và Số điện thoại.
  + Test 2.3: Điền đầy đủ và chính xác tất cả thông tin hợp lệ -> Form tự động cuộn đến khung tóm tắt màu xanh hiển thị đầy đủ Họ tên, Email, SĐT, Đội hình, Thời gian, Lý do kèm ghi chú mô phỏng an toàn.

--------------------------------------------------------------------------------
Chức năng 3A: ACCORDION FAQ ĐÓNG/MỞ BẰNG CHUỘT VÀ BÀN PHÍM (Tại faq.html)
--------------------------------------------------------------------------------
- Vị trí: Trang faq.html (dòng mã trong js/script.js).
- Cơ chế kỹ thuật:
  + Lắng nghe sự kiện click trên các nút .faq-trigger.
  + Cập nhật thuộc tính aria-expanded ("true" / "false") và thêm/xóa class .active trên .faq-item.
  + Hỗ trợ khả năng tiếp cận (Accessibility): Lắng nghe sự kiện 'keydown' kiểm tra phím 'Enter' hoặc phím cách ' ' (Space) để người dùng điều hướng bằng bàn phím (Tab) có thể đóng/mở câu hỏi dễ dàng.
  + Tự động đóng các câu hỏi khác để giữ giao diện luôn gọn gàng và tập trung.

--------------------------------------------------------------------------------
Chức năng 3B: LIGHTBOX MODAL PHÓNG TO ẢNH THƯ VIỆN & PHÍM ESC (Tại thu-vien.html)
--------------------------------------------------------------------------------
- Vị trí: Trang thu-vien.html (dòng mã trong js/script.js).
- Cơ chế kỹ thuật:
  + Lắng nghe sự kiện click và phím Enter/Space trên các thẻ ảnh .gallery-item (có tabindex="0" và role="button").
  + Lấy đường dẫn ảnh chất lượng cao từ data-full, chú thích từ data-caption và nguồn từ data-source.
  + Hiển thị khung xem ảnh #lightbox-modal (.active), khóa cuộn trang (body.style.overflow = "hidden") và chuyển tiêu điểm (focus) vào nút đóng.
  + Cơ chế đóng linh hoạt 3 trong 1:
    * Nhấp vào nút đóng ✕ (#lightbox-close-btn).
    * Nhấp chuột ra vùng tối bên ngoài ảnh (Backdrop click).
    * Bấm phím Escape (Esc) trên bàn phím.
  + Khi đóng: Khôi phục cuộn trang và hoàn trả tiêu điểm về đúng hình ảnh vừa xem để hỗ trợ người dùng bàn phím.

================================================================================
5. CÔNG NGHỆ & TIÊU CHÍ KỸ THUẬT ĐẠT ĐƯỢC
================================================================================
- Ngữ nghĩa HTML5 (Semantic HTML5): Sử dụng đúng và đầy đủ <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>, <figure>, <figcaption>, <table>, <caption>, <thead>, <tbody>, <th>, <tr>, <td>, <form>, <fieldset>, <legend>, <label>.
- Tiêu đề: Mỗi trang chỉ có DUY NHẤT một thẻ <h1> chính, cấu trúc phân cấp <h2>, <h3> logic, chặt chẽ, không bỏ cấp.
- Kiểu dáng CSS3:
  + 100% mã thuần trong tập tin duy nhất css/style.css, sử dụng CSS Variables quản lý màu sắc và kích thước.
  + Dàn trang hiện đại bằng CSS Grid (grid-3, grid-2, gallery-grid) và Flexbox (header, nav, buttons, cards, footer).
  + Định nghĩa đầy đủ trạng thái :hover, :focus, :focus-visible để nâng cao trải nghiệm người dùng và điều hướng bàn phím.
  + Thiết kế Responsive tương thích mượt mà: kiểm thử chuẩn xác trên Desktop (1366px), Laptop (1024px), Tablet (768px) và Mobile chuẩn (390px), tuyệt đối không bị tràn thanh cuộn ngang (horizontal overflow scroll), cỡ chữ và khoảng cách tự động co giãn hài hòa.
- An toàn & Bảo mật:
  + Không sử dụng innerHTML để chèn dữ liệu nhập từ người dùng.
  + Đường dẫn tài nguyên 100% là đường dẫn tương đối (relative paths), không dùng đường dẫn tuyệt đối ổ đĩa máy tính cá nhân.
  + Không thu thập thông tin nhạy cảm (như CCCD, mật khẩu, tài khoản ngân hàng).

================================================================================
KẾT LUẬN & CAM KẾT HOÀN THÀNH 100% YÊU CẦU
================================================================================
Bộ mã nguồn này hoàn thành đầy đủ 9/9 trang HTML, 1 tập tin CSS chung, 1 tập tin JS chung, đầy đủ hình ảnh, infographic, poster và banner đúng theo toàn bộ tiêu chí khắt khe của môn học Thiết kế web MMC403.
Chúc nhóm thực hiện bảo vệ và nộp bài tiểu luận đạt kết quả cao nhất!
================================================================================
