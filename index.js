
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

document.getElementById("chatbot-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const input = document.getElementById("chatbot-input");
    const text = input.value.trim();
    if (text === "") return;

    // Hiển thị tin nhắn người dùng
    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.textContent = text;
    document.getElementById("chatbot-messages").appendChild(userMsg);

    input.value = "";

    // Giả lập phản hồi từ bot
   
});





document.getElementById("chat-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("Bạn", message);
  input.value = "";

  try {
    const res = await fetch("chat.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: message })
    });

    const data = await res.json();
    appendMessage("AI", data.reply);
  } catch (err) {
    appendMessage("Lỗi", "Không thể kết nối đến AI.");
  }
});

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-messages");
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
