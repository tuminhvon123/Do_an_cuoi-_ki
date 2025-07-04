<?php
$host = "localhost";
$user = "root";
$password = ""; // Nếu có mật khẩu MySQL thì ghi vào đây
$database = "yte_db";

$conn = new mysqli($host, $user, $password, $database);
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

$tinh = $_GET['tinh'];
$huyen = $_GET['huyen'];

$sql = "SELECT * FROM medical_centers WHERE tinh_thanh=? AND quan_huyen=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $tinh, $huyen);
$stmt->execute();
$result = $stmt->get_result();

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}
echo json_encode($data);
?>
