/**
 * ============================================================================
 * DỰ ÁN: MÙA HÈ XANH – HÀNH TRÌNH CỐNG HIẾN
 * Môn học: Thiết kế Web (MMC403)
 * Tập tin: js/script.js
 * Mô tả: Mã nguồn JavaScript thuần (Vanilla JS) điều khiển tương tác trang web.
 *        Tuân thủ 100% tiêu chí chấm điểm kỹ thuật:
 *        1. Biến, toán tử, điều kiện, hàm, mảng đối tượng, forEach/filter.
 *        2. DOM: getElementById, querySelector, addEventListener.
 *        3. Cập nhật textContent/classList an toàn, KHÔNG chèn innerHTML từ input.
 *        4. Đầy đủ 3 Chức năng nghiệp vụ bắt buộc:
 *           - Chức năng 1: Lọc hoạt động theo đội hình & tìm kiếm từ khóa.
 *           - Chức năng 2: Kiểm tra hợp lệ biểu mẫu đăng ký & hiển thị tóm tắt.
 *           - Chức năng 3: Accordion FAQ đóng/mở & Lightbox xem ảnh thư viện.
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* ==========================================================================
     PHẦN 0: MENU ĐIỀU HƯỚNG MOBILE (HAMBURGER TOGGLE) - TOÀN SITE
     ========================================================================== */
  const navToggleBtn = document.getElementById("nav-toggle-btn");
  const mainNav = document.getElementById("main-nav");

  if (navToggleBtn && mainNav) {
    navToggleBtn.addEventListener("click", function () {
      const isExpanded = navToggleBtn.getAttribute("aria-expanded") === "true";
      navToggleBtn.setAttribute("aria-expanded", String(!isExpanded));
      mainNav.classList.toggle("active");
    });

    // Đóng menu khi bấm phím Escape trên bàn phím
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mainNav.classList.contains("active")) {
        mainNav.classList.remove("active");
        navToggleBtn.setAttribute("aria-expanded", "false");
        navToggleBtn.focus();
      }
    });

    // Đóng menu khi bấm ra ngoài vùng menu trên thiết bị di động
    document.addEventListener("click", function (e) {
      if (
        mainNav.classList.contains("active") &&
        !mainNav.contains(e.target) &&
        !navToggleBtn.contains(e.target)
      ) {
        mainNav.classList.remove("active");
        navToggleBtn.setAttribute("aria-expanded", "false");
      }
    });

    // Đóng menu khi bấm vào bất kỳ liên kết nào trong menu
    const navLinks = mainNav.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 768 && mainNav.classList.contains("active")) {
          mainNav.classList.remove("active");
          navToggleBtn.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  /* ==========================================================================
     CHỨC NĂNG 1: BỘ LỌC HOẠT ĐỘNG THEO ĐỘI HÌNH & TÌM KIẾM (hoat-dong.html)
     ========================================================================== */
  const activitiesContainer = document.getElementById("activities-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("activity-search");
  const noResultsAlert = document.getElementById("no-results-alert");
  const clearSearchBtn = document.getElementById("clear-search-btn");

  // Dữ liệu mảng các đối tượng hoạt động tiêu biểu (Array of Objects)
  const activitiesData = [
    {
      id: "trong-cay",
      title: "Trồng cây xanh",
      squad: "moi-truong",
      squadName: "Đội hình Môi trường xanh",
      badgeColor: "green",
      image: "images/hoat-dong-1.jpg",
      desc: "Tổ chức trồng cây xanh tạo cảnh quan tại các trường học, công viên và khu dân cư địa phương.",
      meaning: "Tăng diện tích cây xanh, cải thiện cảnh quan và nâng cao ý thức bảo vệ môi trường.",
      detailLink: "chi-tiet-hoat-dong.html#trong-cay"
    },
    {
      id: "don-ve-sinh",
      title: "Dọn vệ sinh khu dân cư",
      squad: "moi-truong",
      squadName: "Đội hình Môi trường xanh",
      badgeColor: "green",
      image: "images/hoat-dong-2.jpg",
      desc: "Thu gom rác thải, quét dọn đường phố, khơi thông cống rãnh và làm sạch các khu vực công cộng.",
      meaning: "Giữ gìn môi trường sống sạch đẹp, phòng ngừa dịch bệnh và hạn chế ô nhiễm.",
      detailLink: "chi-tiet-hoat-dong.html#trong-cay"
    },
    {
      id: "sinh-hoat-thieu-nhi",
      title: "Tổ chức sinh hoạt thiếu nhi",
      squad: "vi-tre-em",
      squadName: "Đội hình Vì trẻ em",
      badgeColor: "orange",
      image: "images/hoat-dong-3.jpg",
      desc: "Tổ chức trò chơi tập thể, vẽ tranh, đọc sách và các hoạt động rèn luyện kỹ năng sống cho trẻ em vùng khó khăn.",
      meaning: "Tạo sân chơi bổ ích, lành mạnh, giúp thiếu nhi phát triển kỹ năng và có một mùa hè đáng nhớ.",
      detailLink: "chi-tiet-hoat-dong.html#sinh-hoat-thieu-nhi"
    },
    {
      id: "tuyen-truyen-moi-truong",
      title: "Tuyên truyền bảo vệ môi trường",
      squad: "moi-truong",
      squadName: "Đội hình Môi trường xanh",
      badgeColor: "green",
      image: "images/hoat-dong-4.jpg",
      desc: "Phát tờ rơi tuyên truyền, hướng dẫn phân loại rác tại nguồn, hạn chế sử dụng đồ nhựa dùng một lần.",
      meaning: "Nâng cao nhận thức cộng đồng và khuyến khích lối sống xanh bền vững.",
      detailLink: "chi-tiet-hoat-dong.html#trong-cay"
    },
    {
      id: "son-sua-khong-gian",
      title: "Sơn sửa không gian cộng đồng",
      squad: "tiep-suc",
      squadName: "Đội hình Tiếp sức cộng đồng",
      badgeColor: "blue",
      image: "images/hoat-dong-5.jpg",
      desc: "Sơn sửa tường rào, bóc xóa quảng cáo bẩn, làm đẹp khu sinh hoạt chung và nhà văn hóa thôn/ấp.",
      meaning: "Mang đến diện mạo khang trang, sạch đẹp cho không gian sinh hoạt văn hóa địa phương.",
      detailLink: "chi-tiet-hoat-dong.html#trong-cay"
    },
    {
      id: "ho-tro-nguoi-dan",
      title: "Hỗ trợ người dân",
      squad: "tiep-suc",
      squadName: "Đội hình Tiếp sức cộng đồng",
      badgeColor: "blue",
      image: "images/hoat-dong-6.jpg",
      desc: "Thăm hỏi tặng quà Mẹ Việt Nam Anh hùng, hỗ trợ ngày công gia đình chính sách, hướng dẫn dịch vụ công trực tuyến.",
      meaning: "Lan tỏa tinh thần tương thân tương ái, củng cố tình gắn bó máu thịt giữa sinh viên và nhân dân.",
      detailLink: "chi-tiet-hoat-dong.html#sinh-hoat-thieu-nhi"
    }
  ];

  // Khởi tạo hiển thị nếu đang ở trang hoat-dong.html
  if (activitiesContainer) {
    let currentSquadFilter = "all";
    let currentSearchTerm = "";

    /**
     * Hàm render danh sách thẻ hoạt động vào DOM một cách an toàn
     * @param {Array} list - Mảng danh sách hoạt động đã lọc
     */
    function renderActivities(list) {
      activitiesContainer.innerHTML = ""; // Xóa nội dung cũ trước khi dựng lại

      if (list.length === 0) {
        if (noResultsAlert) {
          noResultsAlert.classList.add("visible");
        }
        return;
      }

      if (noResultsAlert) {
        noResultsAlert.classList.remove("visible");
      }

      // Duyệt mảng bằng forEach và tạo phần tử an toàn
      list.forEach(function (item) {
        const article = document.createElement("article");
        article.className = "card activity-item";
        article.setAttribute("data-squad", item.squad);

        // Khung ảnh
        const imgWrap = document.createElement("div");
        imgWrap.className = "card-img-wrap";

        const img = document.createElement("img");
        img.className = "card-img";
        img.src = item.image;
        img.alt = item.title;
        img.loading = "lazy";

        const badge = document.createElement("span");
        badge.className = "card-badge " + item.badgeColor;
        badge.textContent = item.squadName;

        imgWrap.appendChild(img);
        imgWrap.appendChild(badge);

        // Thân thẻ
        const body = document.createElement("div");
        body.className = "card-body";

        const title = document.createElement("h3");
        title.className = "card-title";
        title.textContent = item.title;

        const pDesc = document.createElement("p");
        pDesc.className = "card-text";
        pDesc.textContent = item.desc;

        const pMeaning = document.createElement("p");
        pMeaning.style.fontSize = "0.88rem";
        pMeaning.style.color = "var(--color-primary-green-dark)";

        const strongMeaning = document.createElement("strong");
        strongMeaning.textContent = "Ý nghĩa: ";
        pMeaning.appendChild(strongMeaning);
        pMeaning.appendChild(document.createTextNode(item.meaning));

        // Nút chân thẻ
        const cardFooter = document.createElement("div");
        cardFooter.className = "card-footer";

        const link = document.createElement("a");
        link.className = "btn btn-outline btn-sm";
        link.href = item.detailLink;
        link.textContent = "Xem chi tiết hoạt động";

        cardFooter.appendChild(link);

        // Gắn vào body
        body.appendChild(title);
        body.appendChild(pDesc);
        body.appendChild(pMeaning);
        body.appendChild(cardFooter);

        // Gắn vào article
        article.appendChild(imgWrap);
        article.appendChild(body);

        activitiesContainer.appendChild(article);
      });
    }

    /**
     * Hàm áp dụng đồng thời cả bộ lọc đội hình và tìm kiếm từ khóa
     */
    function applyFilterAndSearch() {
      const filtered = activitiesData.filter(function (act) {
        // Kiểm tra điều kiện đội hình
        const matchesSquad = (currentSquadFilter === "all" || act.squad === currentSquadFilter);

        // Kiểm tra điều kiện từ khóa (không phân biệt hoa thường)
        const titleLower = act.title.toLowerCase();
        const descLower = act.desc.toLowerCase();
        const squadLower = act.squadName.toLowerCase();
        const searchLower = currentSearchTerm.toLowerCase().trim();

        const matchesSearch = (
          searchLower === "" ||
          titleLower.includes(searchLower) ||
          descLower.includes(searchLower) ||
          squadLower.includes(searchLower)
        );

        return matchesSquad && matchesSearch;
      });

      renderActivities(filtered);
    }

    // Lắng nghe sự kiện click các nút lọc đội hình
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        filterButtons.forEach(function (btn) {
          btn.classList.remove("active");
        });
        button.classList.add("active");
        currentSquadFilter = button.getAttribute("data-filter") || "all";
        applyFilterAndSearch();
      });
    });

    // Lắng nghe sự kiện gõ tìm kiếm
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        currentSearchTerm = searchInput.value;
        if (clearSearchBtn) {
          clearSearchBtn.style.display = currentSearchTerm.length > 0 ? "block" : "none";
        }
        applyFilterAndSearch();
      });
    }

    // Nút xóa nhanh ô tìm kiếm
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", function () {
        searchInput.value = "";
        currentSearchTerm = "";
        clearSearchBtn.style.display = "none";
        searchInput.focus();
        applyFilterAndSearch();
      });
    }

    // Hiển thị ban đầu toàn bộ danh sách
    renderActivities(activitiesData);
  }

  /* ==========================================================================
     CHỨC NĂNG 2: KIỂM TRA BIỂU MẪU ĐĂNG KÝ & HIỂN THỊ TÓM TẮT (dang-ky.html)
     ========================================================================== */
  const regForm = document.getElementById("volunteer-registration-form");

  if (regForm) {
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const squadSelect = document.getElementById("squad");
    const reasonTextarea = document.getElementById("reason");
    const summaryCard = document.getElementById("registration-summary");
    const resetFormBtn = document.getElementById("reset-form-btn");

    /**
     * Hiển thị thông báo lỗi bên dưới trường nhập liệu
     */
    function showError(inputElement, errorElementId, message) {
      inputElement.classList.add("is-invalid");
      const errEl = document.getElementById(errorElementId);
      if (errEl) {
        errEl.textContent = message;
        errEl.classList.add("visible");
      }
    }

    /**
     * Xóa thông báo lỗi khi trường hợp lệ
     */
    function clearError(inputElement, errorElementId) {
      inputElement.classList.remove("is-invalid");
      const errEl = document.getElementById(errorElementId);
      if (errEl) {
        errEl.textContent = "";
        errEl.classList.remove("visible");
      }
    }

    // Xóa lỗi ngay khi người dùng gõ hoặc chọn lại
    fullnameInput.addEventListener("input", function () {
      clearError(fullnameInput, "fullname-error");
    });
    emailInput.addEventListener("input", function () {
      clearError(emailInput, "email-error");
    });
    phoneInput.addEventListener("input", function () {
      clearError(phoneInput, "phone-error");
    });
    squadSelect.addEventListener("change", function () {
      clearError(squadSelect, "squad-error");
    });
    reasonTextarea.addEventListener("input", function () {
      clearError(reasonTextarea, "reason-error");
    });

    // Lắng nghe sự kiện Submit biểu mẫu
    regForm.addEventListener("submit", function (e) {
      e.preventDefault(); // CHẶN GỬI TRANG MẶC ĐỊNH

      let isValid = true;

      // 1. Kiểm tra Họ và tên (không rỗng, không toàn khoảng trắng, tối thiểu 3 ký tự)
      const fullnameVal = fullnameInput.value.trim();
      if (fullnameVal === "") {
        showError(fullnameInput, "fullname-error", "Vui lòng nhập họ và tên của bạn.");
        isValid = false;
      } else if (fullnameVal.length < 3) {
        showError(fullnameInput, "fullname-error", "Họ và tên phải có ít nhất 3 ký tự.");
        isValid = false;
      } else {
        clearError(fullnameInput, "fullname-error");
      }

      // 2. Kiểm tra Email (định dạng hợp lệ chuẩn Regex)
      const emailVal = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailVal === "") {
        showError(emailInput, "email-error", "Vui lòng nhập địa chỉ email liên hệ.");
        isValid = false;
      } else if (!emailRegex.test(emailVal)) {
        showError(emailInput, "email-error", "Địa chỉ email không đúng định dạng (ví dụ: sinhvien@edu.vn).");
        isValid = false;
      } else {
        clearError(emailInput, "email-error");
      }

      // 3. Kiểm tra Số điện thoại (Việt Nam: 10 chữ số, bắt đầu bằng 03, 05, 07, 08, 09)
      const phoneVal = phoneInput.value.trim();
      const phoneRegex = /^(0[3|5|7|8|9])[0-9]{8}$/;
      if (phoneVal === "") {
        showError(phoneInput, "phone-error", "Vui lòng nhập số điện thoại.");
        isValid = false;
      } else if (!phoneRegex.test(phoneVal)) {
        showError(phoneInput, "phone-error", "Số điện thoại không hợp lệ (gồm 10 chữ số, ví dụ: 0901234567).");
        isValid = false;
      } else {
        clearError(phoneInput, "phone-error");
      }

      // 4. Kiểm tra Lựa chọn đội hình
      const squadVal = squadSelect.value;
      if (!squadVal || squadVal === "") {
        showError(squadSelect, "squad-error", "Vui lòng chọn đội hình tình nguyện muốn tham gia.");
        isValid = false;
      } else {
        clearError(squadSelect, "squad-error");
      }

      // 5. Kiểm tra Thời gian tham gia (Radio group)
      const selectedTime = document.querySelector('input[name="availability"]:checked');
      const timeErrorEl = document.getElementById("time-error");
      if (!selectedTime) {
        if (timeErrorEl) {
          timeErrorEl.textContent = "Vui lòng chọn thời gian bạn có thể tham gia.";
          timeErrorEl.classList.add("visible");
        }
        isValid = false;
      } else {
        if (timeErrorEl) {
          timeErrorEl.textContent = "";
          timeErrorEl.classList.remove("visible");
        }
      }

      // 6. Kiểm tra Lý do đăng ký (tối thiểu 10 ký tự)
      const reasonVal = reasonTextarea.value.trim();
      if (reasonVal === "") {
        showError(reasonTextarea, "reason-error", "Vui lòng chia sẻ mong muốn hoặc lý do tham gia của bạn.");
        isValid = false;
      } else if (reasonVal.length < 10) {
        showError(reasonTextarea, "reason-error", "Lý do tham gia cần tối thiểu 10 ký tự để ban tổ chức hiểu rõ nguyện vọng.");
        isValid = false;
      } else {
        clearError(reasonTextarea, "reason-error");
      }

      // Nếu có lỗi, dừng lại và focus vào trường đầu tiên bị lỗi
      if (!isValid) {
        const firstInvalid = regForm.querySelector(".is-invalid");
        if (firstInvalid) {
          firstInvalid.focus();
        }
        return;
      }

      // KHI DỮ LIỆU HỢP LỆ: Tạo và hiển thị khung tóm tắt mô phỏng (AN TOÀN BẰNG textContent)
      const squadText = squadSelect.options[squadSelect.selectedIndex].text;
      const timeText = selectedTime.parentElement.textContent.trim();

      // Cập nhật textContent an toàn tuyệt đối
      document.getElementById("summary-name").textContent = fullnameVal;
      document.getElementById("summary-email").textContent = emailVal;
      document.getElementById("summary-phone").textContent = phoneVal;
      document.getElementById("summary-squad").textContent = squadText;
      document.getElementById("summary-time").textContent = timeText;
      document.getElementById("summary-reason").textContent = reasonVal;

      // Ẩn form và hiện khung tóm tắt
      summaryCard.classList.add("active");
      summaryCard.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Nút đăng ký lại hoặc chỉnh sửa
    if (resetFormBtn) {
      resetFormBtn.addEventListener("click", function () {
        summaryCard.classList.remove("active");
        regForm.reset();
        regForm.scrollIntoView({ behavior: "smooth", block: "start" });
        fullnameInput.focus();
      });
    }
  }

  /* ==========================================================================
     CHỨC NĂNG 3A: ACCORDION FAQ ĐÓNG/MỞ BẰNG CHUỘT VÀ BÀN PHÍM (faq.html)
     ========================================================================== */
  const faqItems = document.querySelectorAll(".faq-item");

  if (faqItems.length > 0) {
    faqItems.forEach(function (item) {
      const trigger = item.querySelector(".faq-trigger");
      const content = item.querySelector(".faq-content");

      if (trigger && content) {
        // Toggle function chung
        function toggleAccordion() {
          const isActive = item.classList.contains("active");

          // Đóng tất cả các câu hỏi khác (tuỳ chọn: chế độ mở 1 lúc 1 câu)
          faqItems.forEach(function (otherItem) {
            if (otherItem !== item) {
              otherItem.classList.remove("active");
              const otherTrigger = otherItem.querySelector(".faq-trigger");
              if (otherTrigger) {
                otherTrigger.setAttribute("aria-expanded", "false");
              }
            }
          });

          // Đổi trạng thái câu hiện tại
          if (isActive) {
            item.classList.remove("active");
            trigger.setAttribute("aria-expanded", "false");
          } else {
            item.classList.add("active");
            trigger.setAttribute("aria-expanded", "true");
          }
        }

        // Bắt sự kiện Click chuột
        trigger.addEventListener("click", toggleAccordion);

        // Bắt sự kiện bàn phím: Enter và Phím cách (Space)
        trigger.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleAccordion();
          }
        });
      }
    });
  }

  /* ==========================================================================
     CHỨC NĂNG 3B: LIGHTBOX MODAL XEM ẢNH LỚN & ĐÓNG BẰNG ESC (thu-vien.html)
     ========================================================================== */
  const lightboxModal = document.getElementById("lightbox-modal");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (lightboxModal && galleryItems.length > 0) {
    const lightboxImg = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption-text");
    const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
    let lastFocusedElement = null;

    /**
     * Mở modal xem ảnh lớn
     */
    function openLightbox(fullSrc, captionText, triggerElement) {
      lastFocusedElement = triggerElement;
      lightboxImg.src = fullSrc;
      lightboxImg.alt = captionText;
      lightboxCaption.textContent = captionText;

      lightboxModal.classList.add("active");
      lightboxModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden"; // Chặn scroll nền
      lightboxCloseBtn.focus();
    }

    /**
     * Đóng modal xem ảnh
     */
    function closeLightbox() {
      lightboxModal.classList.remove("active");
      lightboxModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = ""; // Khôi phục scroll nền
      lightboxImg.src = ""; // Dọn sạch đường dẫn

      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    }

    // Gắn sự kiện click vào từng ảnh trong thư viện
    galleryItems.forEach(function (item) {
      const fullSrc = item.getAttribute("data-full");
      const captionText = item.getAttribute("data-caption") || "";

      item.addEventListener("click", function () {
        openLightbox(fullSrc, captionText, item);
      });

      // Hỗ trợ bàn phím: Bấm Enter hoặc Space để mở
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(fullSrc, captionText, item);
        }
      });
    });

    // Đóng khi click nút đóng
    if (lightboxCloseBtn) {
      lightboxCloseBtn.addEventListener("click", closeLightbox);
    }

    // Đóng khi click ra vùng tối ngoài ảnh
    lightboxModal.addEventListener("click", function (e) {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    // Đóng khi bấm phím Escape trên bàn phím
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightboxModal.classList.contains("active")) {
        closeLightbox();
      }
    });
  }
});
