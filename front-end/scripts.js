document.querySelector("#registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.querySelector("#registerName").value;
    const email = document.querySelector("#registerEmail").value;
    const password = document.querySelector("#registerPassword").value;

    fetch("register.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.text())
    .then(data => {
        if (data === "success") {
            Swal.fire("Thành công", "Đăng ký thành công!", "success");
        } else {
            Swal.fire("Lỗi", "Đăng ký thất bại!", "error");
        }
    });
});
