<?php
$conn = new mysqli("localhost", "root", "123456789", "hocsinh");
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $password);

if ($stmt->execute()) {
    echo "success";
} else {
    echo "fail";
}
$conn->close();
?>
