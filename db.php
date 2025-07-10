<?php
$host = "localhost";
$username = "Von"; // hoặc tên user MySQL của bạn
$password = "Von123456789";     // hoặc mật khẩu nếu có
$dbname = "tuvan_y_te";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}
?>
