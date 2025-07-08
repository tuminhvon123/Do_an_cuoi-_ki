
// Danh sách bác sĩ
const doctors = {
    '1': {
        name: 'Nguyễn Văn A',
        specialty: 'Răng hàm mặt',
        experience: '10 năm',
        image: '/TuvanYte/anh/pngtree-doctor-cartoon-cute-vector-png-image_6664623.jpg',
        intro: 'Bác sĩ Nguyễn Văn A là chuyên gia hàng đầu trong lĩnh vực Răng hàm mặt với hơn 10 năm kinh nghiệm, luôn tận tâm chăm sóc sức khỏe bệnh nhân và áp dụng các phương pháp điều trị tiên tiến.',
        achievements: ['Giải thưởng Bác sĩ Xuất sắc 2023', 'Thực hiện hơn 500 ca điều trị nha khoa thành công', 'Công bố 5 bài báo khoa học trên tạp chí quốc tế'],
        specialtyDetail: 'Chuyên sâu về chỉnh nha, phẫu thuật hàm và các bệnh lý răng miệng phức tạp, với kiến thức cập nhật từ các hội thảo quốc tế.'
    },
    '2': {
        name: 'Trần Thị B',
        specialty: 'Thần kinh',
        experience: '8 năm',
        image: '/TuvanYte/anh/doctor2.jpg',
        intro: 'Bác sĩ Trần Thị B là chuyên gia trong lĩnh vực Thần kinh với 8 năm kinh nghiệm, tận tâm trong việc chẩn đoán và điều trị các bệnh lý thần kinh phức tạp.',
        achievements: ['Giải thưởng Bác sĩ Thần kinh tiêu biểu 2022', 'Thực hiện hơn 300 ca điều trị bệnh lý thần kinh', 'Công bố 3 bài báo khoa học về thần kinh học'],
        specialtyDetail: 'Chuyên sâu về điều trị đột quỵ, động kinh và các rối loạn thần kinh, thường xuyên tham gia các khóa đào tạo quốc tế.'
    },
    '3': {
        name: 'Lê Văn C',
        specialty: 'Mắt',
        experience: '12 năm',
        image: '/TuvanYte/anh/doctor3.jpg',
        intro: 'Bác sĩ Lê Văn C là chuyên gia hàng đầu trong lĩnh vực Nhãn khoa với hơn 12 năm kinh nghiệm, nổi tiếng với sự tận tâm và kỹ thuật điều trị tiên tiến.',
        achievements: ['Giải thưởng Bác sĩ Nhãn khoa xuất sắc 2024', 'Thực hiện hơn 600 ca phẫu thuật mắt thành công', 'Công bố 4 bài báo khoa học về nhãn khoa'],
        specialtyDetail: 'Chuyên sâu về phẫu thuật đục thủy tinh thể, điều trị glaucoma và các bệnh lý võng mạc, tham gia nhiều hội thảo quốc tế.'
    },
    '4': {
        name: 'Phạm Thị D',
        specialty: 'Tuyến vú',
        experience: '9 năm',
        image: '/TuvanYte/anh/doctor4.jpg',
        intro: 'Bác sĩ Phạm Thị D là chuyên gia trong lĩnh vực Tuyến vú với 9 năm kinh nghiệm, tận tâm trong việc chăm sóc và điều trị các bệnh lý về tuyến vú.',
        achievements: ['Giải thưởng Bác sĩ Tuyến vú tiêu biểu 2023', 'Thực hiện hơn 400 ca phẫu thuật tuyến vú', 'Công bố 2 bài báo khoa học về bệnh lý tuyến vú'],
        specialtyDetail: 'Chuyên sâu về chẩn đoán và điều trị ung thư vú, phẫu thuật tái tạo vú, tham gia nhiều hội thảo chuyên ngành quốc tế.'
    },
    '5': {
        name: 'Hoàng Văn E',
        specialty: 'Da liễu',
        experience: '11 năm',
        image: '/TuvanYte/anh/doctor5.jpg',
        intro: 'Bác sĩ Hoàng Văn E là chuyên gia Da liễu với hơn 11 năm kinh nghiệm, nổi tiếng với phương pháp điều trị các bệnh da liễu hiệu quả và an toàn.',
        achievements: ['Giải thưởng Bác sĩ Da liễu xuất sắc 2023', 'Điều trị thành công hơn 700 ca bệnh da liễu', 'Công bố 3 bài báo khoa học về da liễu'],
        specialtyDetail: 'Chuyên sâu về điều trị mụn, vảy nến, và các bệnh da liễu mãn tính, áp dụng công nghệ laser tiên tiến.'
    },
    '6': {
        name: 'Nguyễn Thị F',
        specialty: 'Ung bướu',
        experience: '15 năm',
        image: '/TuvanYte/anh/doctor6.jpg',
        intro: 'Bác sĩ Nguyễn Thị F là chuyên gia hàng đầu trong lĩnh vực Ung bướu với hơn 15 năm kinh nghiệm, tận tâm trong việc điều trị và chăm sóc bệnh nhân ung thư.',
        achievements: ['Giải thưởng Bác sĩ Ung bướu xuất sắc 2024', 'Thực hiện hơn 800 ca điều trị ung thư thành công', 'Công bố 6 bài báo khoa học về ung bướu'],
        specialtyDetail: 'Chuyên sâu về điều trị ung thư phổi, gan và dạ dày, áp dụng các phương pháp hóa trị và xạ trị tiên tiến.'
    },
    '7': {
        name: 'Trần Văn G',
        specialty: 'Ngoại nhi',
        experience: '7 năm',
        image: '/TuvanYte/anh/doctor7.jpg',
        intro: 'Bác sĩ Trần Văn G là chuyên gia trong lĩnh vực Ngoại nhi với 7 năm kinh nghiệm, tận tâm trong việc điều trị các bệnh lý ngoại khoa ở trẻ em.',
        achievements: ['Giải thưởng Bác sĩ Ngoại nhi tiêu biểu 2022', 'Thực hiện hơn 200 ca phẫu thuật nhi khoa', 'Công bố 2 bài báo khoa học về ngoại nhi'],
        specialtyDetail: 'Chuyên sâu về phẫu thuật dị tật bẩm sinh ở trẻ em và các bệnh lý ngoại khoa phức tạp.'
    },
    '8': {
        name: 'Phạm Văn H',
        specialty: 'Răng hàm mặt',
        experience: '8 năm',
        image: '/TuvanYte/anh/doctor8.jpg',
        intro: 'Bác sĩ Phạm Văn H là chuyên gia trong lĩnh vực Răng hàm mặt với 8 năm kinh nghiệm, tận tâm trong việc chăm sóc sức khỏe răng miệng.',
        achievements: ['Giải thưởng Bác sĩ Răng hàm mặt tiêu biểu 2023', 'Thực hiện hơn 400 ca điều trị nha khoa', 'Công bố 2 bài báo khoa học về nha khoa'],
        specialtyDetail: 'Chuyên sâu về chỉnh nha, cấy ghép implant và điều trị các bệnh lý răng miệng.'
    },
    '9': {
        name: 'Nguyễn Thị I',
        specialty: 'Thần kinh',
        experience: '10 năm',
        image: '/TuvanYte/anh/doctor9.jpg',
        intro: 'Bác sĩ Nguyễn Thị I là chuyên gia trong lĩnh vực Thần kinh với 10 năm kinh nghiệm, tận tâm trong việc điều trị các bệnh lý thần kinh.',
        achievements: ['Giải thưởng Bác sĩ Thần kinh tiêu biểu 2023', 'Thực hiện hơn 350 ca điều trị bệnh lý thần kinh', 'Công bố 4 bài báo khoa học về thần kinh học'],
        specialtyDetail: 'Chuyên sâu về điều trị Parkinson, đau đầu mãn tính và các rối loạn thần kinh.'
    },
    '10': {
        name: 'Trần Văn K',
        specialty: 'Mắt',
        experience: '7 năm',
        image: '/TuvanYte/anh/doctor10.jpg',
        intro: 'Bác sĩ Trần Văn K là chuyên gia trong lĩnh vực Nhãn khoa với 7 năm kinh nghiệm, tận tâm trong việc chăm sóc sức khỏe mắt.',
        achievements: ['Giải thưởng Bác sĩ Nhãn khoa tiêu biểu 2022', 'Thực hiện hơn 300 ca phẫu thuật mắt', 'Công bố 2 bài báo khoa học về nhãn khoa'],
        specialtyDetail: 'Chuyên sâu về điều trị cận thị, viễn thị và các bệnh lý giác mạc.'
    }
};


// const urlParams = new URLSearchParams(window.location.search);
// const doctorId = urlParams.get('id') || '1';
// const doctor = doctors[doctorId] || doctors['1'];


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('doctorName').textContent = doctor.name;
    document.getElementById('doctorSpecialty').innerHTML = `Chuyên khoa: <span class="text-primary">${doctor.specialty}</span><br>Kinh nghiệm: <span class="text-primary">${doctor.experience}</span>`;
    document.getElementById('doctorImage').src = doctor.image;
    document.getElementById('doctorIntro').textContent = doctor.intro;
    document.getElementById('doctorSpecialtyDetail').textContent = doctor.specialtyDetail;
    const achievementsList = document.getElementById('doctorAchievements');
    achievementsList.innerHTML = doctor.achievements.map(ach => `<li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>${ach}</li>`).join('');
    document.getElementById('chatDoctorName').textContent = `Chat với Bác sĩ ${doctor.name}`;
});

// Trạng thái đăng nhập
let isLoggedIn = false;

// Hiển thị modal đăng nhập
function showLoginModal() {
    new bootstrap.Modal(document.getElementById('loginModal')).show();
}

// Xử lý yêu cầu đăng nhập
function requireLogin(action) {
    if (!isLoggedIn) {
        showLoginModal();
        return;
    }
    if (action === 'bookAppointment') {
        document.getElementById('appointmentForm').reset();
        new bootstrap.Modal(document.getElementById('appointmentModal')).show();
    } else if (action === 'consultNow') {
        toggleChat();
    } else if (action === 'submitReview') {
        submitReview();
    }
}

// Toggle khung chat
function toggleChat() {
    const chatSection = document.getElementById('chatSection');
    if (!isLoggedIn) {
        showLoginModal();
        return;
    }
    chatSection.style.display = chatSection.style.display === 'none' ? 'block' : 'none';
    if (chatSection.style.display === 'block') {
        loadChatHistory();
    }
}

// Gửi tin nhắn
function sendMessage(event) {
    event.preventDefault();
    if (!isLoggedIn) {
        showLoginModal();
        return;
    }
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message user';
        userMessage.innerHTML = `<div class="message-text">${message}</div><small class="text-muted">${new Date().toLocaleTimeString()}</small>`;
        chatMessages.appendChild(userMessage);
        chatInput.value = '';
        saveChatHistory(message, 'user');
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'chat-message bot';
            botMessage.innerHTML = `<div class="message-text">Xin chào! Tôi sẽ sớm tư vấn cho bạn.</div><small class="text-muted">${new Date().toLocaleTimeString()}</small>`;
            chatMessages.appendChild(botMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}

// Gửi cảm nhận
function submitReview() {
    if (!isLoggedIn) {
        showLoginModal();
        return;
    }
    const reviewInput = document.getElementById('reviewInput');
    const review = reviewInput.value.trim();
    if (review) {
        const doctorReviews = document.getElementById('doctorReviews');
        const newReview = document.createElement('div');
        newReview.className = 'card mb-3 shadow-sm';
        newReview.innerHTML = `<div class="card-body"><p class="mb-0"><strong>Bạn</strong>: ${review} <small class="text-muted">${new Date().toLocaleDateString()}</small></p></div>`;
        doctorReviews.insertBefore(newReview, doctorReviews.firstChild);
        reviewInput.value = '';
        Swal.fire('Thành công!', 'Cảm nhận của bạn đã được gửi.', 'success');
    }
}

// Lưu và tải lịch sử chat
function saveChatHistory(message, type) {
    let history = JSON.parse(localStorage.getItem(`chatHistory_${doctorId}`) || '[]');
    history.push({ message, type, timestamp: new Date().toISOString() });
    localStorage.setItem(`chatHistory_${doctorId}`, JSON.stringify(history));
}

function loadChatHistory() {
    const chatMessages = document.getElementById('chatMessages');
    const history = JSON.parse(localStorage.getItem(`chatHistory_${doctorId}`) || '[]');
    chatMessages.innerHTML = history.map(item => {
        const time = new Date(item.timestamp).toLocaleTimeString();
        return `<div class="chat-message ${item.type}"><div class="message-text">${item.message}</div><small class="text-muted">${time}</small></div>`;
    }).join('');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Xử lý đăng nhập
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    if (email && password) {
        isLoggedIn = true;
        bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        Swal.fire('Thành công!', 'Bạn đã đăng nhập.', 'success');
    } else {
        Swal.fire('Lỗi!', 'Vui lòng nhập đầy đủ thông tin.', 'error');
    }
});

// Xử lý đăng ký
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    if (password !== confirmPassword) {
        Swal.fire('Lỗi!', 'Mật khẩu không khớp!', 'error');
        return;
    }
    isLoggedIn = true;
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    Swal.fire('Thành công!', 'Bạn đã đăng ký và đăng nhập.', 'success');
});

// Xử lý đặt lịch hẹn
document.getElementById('appointmentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
        showLoginModal();
        return;
    }
    const date = document.getElementById('appointmentDate').value;
    const time = document.getElementById('appointmentTime').value;
    const location = document.getElementById('appointmentLocation').value;
    if (date && time && location) {
        Swal.fire('Thành công!', `Lịch hẹn với ${doctor.name} được đặt: ${date} lúc ${time} tại ${location}.`, 'success');
        bootstrap.Modal.getInstance(document.getElementById('appointmentModal')).hide();
    } else {
        Swal.fire('Lỗi!', 'Vui lòng điền đầy đủ thông tin.', 'error');
    }
});

// Gửi tin nhắn bằng Enter
document.getElementById('chatInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage(e);
    }
});