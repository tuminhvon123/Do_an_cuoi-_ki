<?php
$conn = new mysqli("localhost", "root", "123456789", "hocsinh");
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email=? AND password=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo "success";
} else {
    echo "fail";
}
$conn->close();
?>
