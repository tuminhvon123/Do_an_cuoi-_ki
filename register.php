<?php
require 'db.php';

// Kiểm tra kết nối database
if (!$conn) {
    die("<script>alert('Lỗi kết nối database'); window.history.back();</script>");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Kiểm tra và làm sạch dữ liệu đầu vào
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    
    // Validate dữ liệu
    if (empty($name) || empty($email) || empty($password)) {
        echo "<script>alert('Vui lòng điền đầy đủ thông tin'); window.history.back();</script>";
        exit;
    }
    
    // Mã hóa mật khẩu
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Chuẩn bị và thực thi câu lệnh SQL
    $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $hashed_password);

    if ($stmt->execute()) {
        echo "<script>alert('Đăng ký thành công!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Lỗi đăng ký: ". $stmt->error . "'); window.history.back();</script>";
    }
}
?>