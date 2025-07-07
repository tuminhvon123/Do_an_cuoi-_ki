// Đăng ký
document.querySelector("#registerModal form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.querySelector("#registerName").value;
    const email = document.querySelector("#registerEmail").value;
    const password = document.querySelector("#registerPassword").value;

    fetch("register.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    })
    .then(res => res.text())
    .then(data => {
        if (data === "success") {
            Swal.fire("Thành công", "Đăng ký thành công!", "success");
        } else {
            Swal.fire("Lỗi", "Email đã tồn tại hoặc lỗi khác.", "error");
        }
    });
});

// Đăng nhập
document.querySelector("#loginModal form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;

    fetch("login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    })
    .then(res => res.text())
    .then(data => {
        if (data === "success") {
            Swal.fire("Thành công", "Đăng nhập thành công!", "success");
        } else {
            Swal.fire("Lỗi", "Thông tin không chính xác.", "error");
        }
    });
});
