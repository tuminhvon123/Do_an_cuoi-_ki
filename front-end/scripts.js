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


   const chatBody = document.querySelector(".chat-body");
   const messageInput = document.querySelector(".message-input");
   const sendMessageButton = document.querySelector("#send-message");
   const fileInput = document.querySelector("#file-input");
   const fileUploadWrapper = document.querySelector(".file-upload-wrapper");
   const fileCancelButton = document.querySelector("#file-cancel");
   const chatbotToggler = document.querySelector("#chatbot-toggler");
   const closeChatbot = document.querySelector("#close-chatbot");

   // Cấu hình API - Thay bằng API Key thật của bạn
   const API_KEY = "AIzaSyBvFND_IuCfSRF8CTGxTafI6_GxWVSuMBI"; // Thay bằng API Key từ Google AI Studio
   const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

   const userData = {
       message: null,
       file: {
           data: null,
           mime_type: null
       }
   };

   // Thay đổi chatHistory, loại bỏ role "system" và tích hợp ngữ cảnh vào tin nhắn ban đầu
   const chatHistory = [
       {
           role: "model",
           parts: [{ text: "Xin chào 👋\nTôi là Trợ lý ảo, một chatbot tư vấn y tế. Hãy cung cấp thông tin cơ bản và lời khuyên y tế dựa trên triệu chứng mà người dùng mô tả. Trả lời bằng tiếng Việt, ngắn gọn, rõ ràng, và khuyến khích người dùng tham khảo ý kiến bác sĩ nếu cần. Bạn đang gặp vấn đề sức khỏe gì? Hãy mô tả triệu chứng để tôi giúp bạn!" }]
       },
   ];

   const initialInputHeight = messageInput.scrollHeight;

   // Create message element with dynamic classes and return it
   const createMessageElement = (content, ...classes) => {
       const div = document.createElement("div");
       div.classList.add("message", ...classes);
       div.innerHTML = content;
       return div;
   };
// Generate bot response using API
   const generateBotResponse = async (incomingMessageDiv) => {
       const messageElement = incomingMessageDiv.querySelector(".message-text");
       
       chatHistory.push({
           role: "user",
           parts: [{ text: userData.message }, ...(userData.file.data ? [{ inline_data: userData.file }] : [])],
       });
       
       // API request options
       const requestOptions = {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({
               contents: chatHistory
           })
       };

       try {
           // Fetch bot response from API
           const response = await fetch(API_URL, requestOptions);
           const data = await response.json();
           if (!response.ok) throw new Error(data.error.message);

           // Extract and display bot's response text
           const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
           messageElement.innerText = apiResponseText;
           chatHistory.push({
               role: "model",
               parts: [{ text: apiResponseText }]
           });
       } catch (error) {
           messageElement.innerText = error.message;
           messageElement.style.color = "#ff0000";
       } finally {
           userData.file = {};
           incomingMessageDiv.classList.remove("thinking");
           chatBody.scrollTo({ behavior: "smooth", top: chatBody.scrollHeight });
       }
   };

   // Handle outgoing user message
   const handleOutgoingMessage = (e) => {
       e.preventDefault();
       userData.message = messageInput.value.trim();
       messageInput.value = "";
       fileUploadWrapper.classList.remove("file-uploaded");
       messageInput.dispatchEvent(new Event("input"));

       // Create and display user message
       const messageContent = `<div class="message-text"></div>
                               ${userData.file.data ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="attachment" />` : ""}`;

       const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
       outgoingMessageDiv.querySelector(".message-text").innerText = userData.message;
       chatBody.appendChild(outgoingMessageDiv);
       chatBody.scrollTop = chatBody.scrollHeight;

       // Simulate bot response with thinking indicator after a delay
       setTimeout(() => {
           const messageContent = `<svg class="bot-avatar" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                       <path fill="#ffffff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                   </svg>
                   <div class="message-text">
                       <div class="thinking-indicator">
                           <div class="dot"></div>
<div class="dot"></div>
                           <div class="dot"></div>
                       </div>
                   </div>`;

           const incomingMessageDiv = createMessageElement(messageContent, "bot-message", "thinking");
           chatBody.appendChild(incomingMessageDiv);
           chatBody.scrollTo({ behavior: "smooth", top: chatBody.scrollHeight });
           generateBotResponse(incomingMessageDiv);
       }, 600);
   };

   // Handle Enter key press for sending messages
   messageInput.addEventListener("keydown", (e) => {
       const userMessage = e.target.value.trim();
       if (e.key === "Enter" && userMessage && !e.shiftKey && window.innerWidth > 768) {
           handleOutgoingMessage(e);
       }
   });

   messageInput.addEventListener("input", (e) => {
       messageInput.style.height = `${initialInputHeight}px`;
       messageInput.style.height = `${messageInput.scrollHeight}px`;
       document.querySelector(".chat-form").style.borderRadius = messageInput.scrollHeight > initialInputHeight ? "15px" : "32px";
   });

   // Handle file input change event
   fileInput.addEventListener("change", (e) => {
       const file = e.target.files[0];
       if (!file) return;
       const reader = new FileReader();
       reader.onload = (e) => {
           fileUploadWrapper.querySelector("img").src = e.target.result;
           fileUploadWrapper.classList.add("file-uploaded");
           const base64String = e.target.result.split(",")[1];

           // Store file data in userData
           userData.file = {
               data: base64String,
               mime_type: file.type
           };
           
           fileInput.value = ""; 
       };

       reader.readAsDataURL(file);
   });

   fileCancelButton.addEventListener("click", (e) => {
       userData.file = {};
       fileUploadWrapper.classList.remove("file-uploaded");
   });

   const picker = new EmojiMart.Picker({
       theme: "light",
       showSkinTones: "none",
       previewPosition: "none",
       onEmojiSelect: (emoji) => {
           const { selectionStart: start, selectionEnd: end } = messageInput;
           messageInput.setRangeText(emoji.native, start, end, "end");
           messageInput.focus();
       },
       onClickOutside: (e) => {
           if (e.target.id === "emoji-picker") {
               document.body.classList.toggle("show-emoji-picker");
           } else {
               document.body.classList.remove("show-emoji-picker");
           }
       },
   });

   document.querySelector(".chat-form").appendChild(picker);

   fileInput.addEventListener("change", async (e) => {
       const file = e.target.files[0];
       if (!file) return;
       const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
       if (!validImageTypes.includes(file.type)) {
           await Swal.fire({
               icon: 'error',
               title: 'Lỗi',
               text: 'Chỉ chấp nhận file ảnh (JPEG, PNG, GIF, WEBP)',
confirmButtonText: 'OK'
           });
           resetFileInput();
           return;
       }
       const reader = new FileReader();
       reader.onload = (e) => {
           fileUploadWrapper.querySelector("img").src = e.target.result;
           fileUploadWrapper.classList.add("file-uploaded");
           const base64String = e.target.result.split(",")[1];
           userData.file = {
               data: base64String,
               mime_type: file.type
           };
       };
       reader.readAsDataURL(file);
   });

   function resetFileInput() {
       fileInput.value = "";
       fileUploadWrapper.classList.remove("file-uploaded");
       fileUploadWrapper.querySelector("img").src = "#";
       userData.file = { data: null, mime_type: null };
       document.querySelector(".chat-form").reset();
   }

   sendMessageButton.addEventListener("click", (e) => handleOutgoingMessage(e));
   document.querySelector("#file-upload").addEventListener("click", (e) => fileInput.click());
   chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
   closeChatbot.addEventListener("click", () => document.body.classList.remove("show-chatbot"));