
document.getElementById("registerForm").addEventListener("submit", function(e) {
    const pass = document.getElementById("registerPassword").value;
    const confirm = document.getElementById("registerConfirmPassword").value;
    if (pass !== confirm) {
        e.preventDefault();
        alert("Mật khẩu không khớp!");
    }
});








document.getElementById("chatbot-toggle").addEventListener("click", () => {
    document.getElementById("chatbot").style.display = "flex";
});
document.getElementById("chatbot-close").addEventListener("click", () => {
    document.getElementById("chatbot").style.display = "none";
});

const chatForm = document.getElementById("chatbot-form");
const chatInput = document.getElementById("chatbot-input");
const chatMessages = document.getElementById("chatbot-messages");

// Danh sách bệnh - triệu chứng - thuốc
const responses = [
    {
        keywords: ["sốt", "nóng", "nhiệt độ cao"],
        reply: "Bạn có thể đang bị sốt. Dùng thuốc hạ sốt như Paracetamol, uống nhiều nước và nghỉ ngơi."
    },
    {
        keywords: ["đau họng", "rát họng", "viêm họng"],
        reply: "Triệu chứng đau họng có thể do viêm. Hãy súc miệng nước muối, uống trà gừng hoặc dùng thuốc như Strepsils."
    },
    {
        keywords: ["ho", "đờm", "khó thở"],
        reply: "Bạn bị ho? Có thể là cảm lạnh hay viêm phế quản. Dùng Prospan hoặc siro ho thảo dược, uống nước ấm."
    },
    {
        keywords: ["đau đầu", "nhức đầu", "mệt mỏi"],
        reply: "Bạn có thể bị đau đầu do căng thẳng, thiếu ngủ. Hãy nghỉ ngơi và có thể dùng Panadol hoặc Efferalgan."
    },
    {
        keywords: ["đau bụng", "tiêu chảy", "chướng bụng"],
        reply: "Bạn có thể bị rối loạn tiêu hóa. Hãy dùng Smecta, Berberin, ăn cháo loãng và uống nhiều nước."
    },
    {
        keywords: ["dị ứng", "ngứa", "nổi mẩn", "phát ban"],
        reply: "Bạn có thể bị dị ứng. Hãy tránh tác nhân gây dị ứng và có thể dùng thuốc Loratadin hoặc Cetirizin."
    },
    {
        keywords: ["mất ngủ", "khó ngủ"],
        reply: "Mất ngủ thường do stress. Hãy thư giãn, hạn chế dùng điện thoại trước khi ngủ và dùng trà tâm sen, hoa cúc."
    },
    {
        keywords: ["đau lưng", "mỏi cổ", "nhức mỏi"],
        reply: "Bạn có thể bị đau cơ. Nghỉ ngơi, xoa bóp với dầu nóng, hoặc dùng Salonpas dán chỗ đau."
    },
    {
        keywords: ["viêm xoang", "ngạt mũi", "chảy nước mũi"],
        reply: "Có thể bạn bị viêm xoang. Xịt mũi bằng nước muối sinh lý và dùng thuốc như Xoang Bách Phục hoặc Loratadin."
    },
    {
        keywords: ["đau răng", "sâu răng", "viêm lợi"],
        reply: "Bạn nên đến nha sĩ kiểm tra. Trong lúc chờ, có thể dùng Paracetamol giảm đau và súc miệng nước muối."
    },
    {
    keywords: ["paracetamol", "thuốc hạ sốt", "panadol", "efferalgan"],
    reply: "Paracetamol (Panadol, Efferalgan) là thuốc hạ sốt và giảm đau nhẹ. Không nên dùng quá liều để tránh ảnh hưởng gan."
},
{
    keywords: ["ibuprofen", "thuốc giảm viêm", "thuốc chống viêm"],
    reply: "Ibuprofen là thuốc giảm đau, hạ sốt, chống viêm. Thường dùng cho đau cơ, khớp, đau răng. Không nên dùng khi có bệnh dạ dày."
},
{
    keywords: ["amoxicillin", "thuốc kháng sinh", "thuốc trị viêm họng"],
    reply: "Amoxicillin là thuốc kháng sinh điều trị nhiễm khuẩn như viêm họng, viêm tai, viêm phổi. Cần uống đủ liều và đúng chỉ định bác sĩ."
},
{
    keywords: ["smecta", "thuốc tiêu chảy", "thuốc trị rối loạn tiêu hóa"],
    reply: "Smecta giúp điều trị tiêu chảy và rối loạn tiêu hóa. Hòa tan với nước, dùng sau ăn hoặc sau khi tiêu chảy."
},
{
    keywords: ["berberin", "thuốc kháng khuẩn đường ruột"],
    reply: "Berberin là thuốc kháng khuẩn nhẹ dùng điều trị tiêu chảy, kiết lỵ, rối loạn tiêu hóa."
},
{
    keywords: ["loratadin", "cetirizin", "thuốc dị ứng"],
    reply: "Loratadin và Cetirizin là thuốc kháng histamin, dùng trị dị ứng, nổi mẩn đỏ, ngứa da, sổ mũi dị ứng."
},
{
    keywords: ["prospan", "siro ho", "siro prospan"],
    reply: "Prospan là siro ho thảo dược, an toàn cho trẻ nhỏ, giúp long đờm, giảm ho hiệu quả."
},
{
    keywords: ["acetylcysteine", "acemuc", "thuốc long đờm"],
    reply: "Acetylcysteine (Acemuc) là thuốc long đờm, giúp làm loãng đờm và dễ khạc ra khi ho có đờm."
},
{
    keywords: ["rotunda", "thực phẩm chức năng ngủ ngon"],
    reply: "Rotunda là sản phẩm hỗ trợ giấc ngủ, giúp ngủ sâu và giảm tình trạng mất ngủ nhẹ. Không gây nghiện."
},
{
    keywords: ["salonpas", "cao dán", "thuốc giảm đau cơ"],
    reply: "Salonpas là miếng dán giảm đau cơ, đau lưng, đau vai gáy. Dán tối đa 8 tiếng mỗi ngày."
}

];

// Hàm phản hồi
function getReply(message) {
    const lowerMsg = message.toLowerCase();
    for (const item of responses) {
        if (item.keywords.some(keyword => lowerMsg.includes(keyword))) {
            return item.reply;
        }
    }
    return "Tôi chưa rõ triệu chứng. Bạn có thể mô tả chi tiết hơn không?";
}

// Gửi và nhận tin nhắn
chatForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (text === "") return;

    appendMessage("user", text);

    const reply = getReply(text);
    setTimeout(() => appendMessage("bot", reply), 600);

    chatInput.value = "";
});

// Hiển thị tin nhắn
function appendMessage(sender, message) {
    const div = document.createElement("div");
    div.className = sender === "user" ? "user-message" : "bot-message";
    div.textContent = message;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('responsive-menu');
    menu.classList.toggle('d-none');
});

