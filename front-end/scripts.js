// CHATBOX AI
// Toggle chatbot consultation widget
function toggleChatbot() {
    const chatBox = document.querySelector('.chatbot-chat-box');
    chatBox.classList.toggle('d-none');
}

// Handle chatbot consultation form submission
function handleChatbotConsultation(event) {
    event.preventDefault();
    const message = document.getElementById('chatbotMessage').value;
    const chatContent = document.querySelector('.chat-content');
    chatContent.innerHTML = `<p>Bạn: ${message}</p><p class="text-muted small">AI: Đang xử lý... (Tính năng phát triển)</p>`;
    document.getElementById('chatbotMessage').value = '';
    chatContent.scrollTop = chatContent.scrollHeight;
}

// Handle schedule appointment
function scheduleAppointment() {
    alert('Chức năng đặt lịch khám bệnh đang được phát triển. Vui lòng thử lại sau!');
}




// Xử lý sự kiện tìm kiếm
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const contentItems = document.getElementById('contentItems').getElementsByClassName('item');
    const mainContent = document.getElementById('mainContentLeft');

    // Xóa nội dung cũ
    mainContent.innerHTML = '';

    if (searchInput) {
        let found = false;
        const results = document.createElement('div');
        results.id = 'contentItems';

        // Lọc các item khớp với từ khóa
        for (let item of contentItems) {
            const title = item.getAttribute('data-title').toLowerCase();
            if (title.includes(searchInput)) {
                found = true;
                results.appendChild(item.cloneNode(true));
            }
        }

        if (found) {
            mainContent.appendChild(results);
            mainContent.innerHTML = `<h2>Kết quả tìm kiếm cho: "${searchInput}"</h2>` + results.innerHTML;
        } else {
            mainContent.innerHTML = `<h2>Không tìm thấy kết quả cho "${searchInput}"</h2><p>Vui lòng thử từ khóa khác như "cẩm nang sức khỏe"!</p>`;
        }
    } else {
        alert('Vui lòng nhập từ khóa tìm kiếm!');
    }
});



const districtOptions = {
  hanoi: ["Quận Hoàn Kiếm", "Quận Ba Đình"],
  hcm: ["Quận 1", "Quận 2", "Quận 3"],
  danang: ["Quận Hải Châu", "Quận Sơn Trà"],
  ninhthuan: ["Phan Rang - Tháp Chàm"],
  binhthuan: ["Hàm Thuận Bắc", "Phan Thiết"],
  binhdinh: ["Tây Sơn", "Quy Nhơn"],
  kontum: ["Kon Plông", "Đắk Hà"]
};

function updateDistricts() {
  const province = document.getElementById("province").value;
  const districtSelect = document.getElementById("district");

  districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';

  if (districtOptions[province]) {
    districtOptions[province].forEach(district => {
      const option = document.createElement("option");
      option.text = district;
      option.value = district.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      districtSelect.add(option);
    });
  }
}


// Nội dung chính
document.addEventListener('DOMContentLoaded', function () {
    const newsItems = document.querySelectorAll('.news-item');

    newsItems.forEach(item => {
        const img = item.querySelector('img');
        const title = item.querySelector('.card-title');
        const detail = item.querySelector('.news-detail');

        // Xử lý nhấp vào ảnh
        img.addEventListener('click', function () {
            toggleDetail(detail);
        });

        // Xử lý nhấp vào tiêu đề
        title.addEventListener('click', function () {
            toggleDetail(detail);
        });
    });

    function toggleDetail(detail) {
        if (detail.style.display === 'none' || detail.style.display === '') {
            detail.style.display = 'block';
        } else {
            detail.style.display = 'none';
        }
    }
});

// Pause logo slider on hover
document.addEventListener('DOMContentLoaded', () => {
    const partnerLogos = document.querySelector('.partner-logos');
    const partnerSlider = document.querySelector('.partner-slider');

    partnerSlider.addEventListener('mouseenter', () => {
        partnerLogos.classList.add('paused');
    });

    partnerSlider.addEventListener('mouseleave', () => {
        partnerLogos.classList.remove('paused');
    });
});

// Handle newsletter signup
function handleNewsletterSignup(event) {
    event.preventDefault();
    alert('Đăng ký bản tin thành công! (Tính năng phát triển)');
}

// Handle newsletter signup
function handleNewsletterSignup(event) {
    event.preventDefault();
    alert("Cảm ơn bạn đã đăng ký bản tin sức khỏe!");
}


