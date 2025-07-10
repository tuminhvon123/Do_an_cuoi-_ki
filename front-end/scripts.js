
document.getElementById("registerForm").addEventListener("submit", function(e) {
    const pass = document.getElementById("registerPassword").value;
    const confirm = document.getElementById("registerConfirmPassword").value;
    if (pass !== confirm) {
        e.preventDefault();
        alert("Mật khẩu không khớp!");
    }
});
