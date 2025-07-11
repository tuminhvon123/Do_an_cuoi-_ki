<?php
header('Content-Type: application/json; charset=utf-8');

$data = json_decode(file_get_contents("php://input"), true);
$prompt = $data['prompt'] ?? '';

if (!$prompt) {
    echo json_encode(['reply' => 'Câu hỏi trống']);
    exit;
}

$api_key = ''; // ← Thay bằng API key thật của bạn

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.openai.com/v1/chat/completions");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $api_key"
]);

$body = json_encode([
    "model" => "gpt-3.5-turbo",
    "messages" => [
        ["role" => "system", "content" => "Bạn là trợ lý y tế thông minh. Trả lời ngắn gọn, dễ hiểu."],
        ["role" => "user", "content" => $prompt]
    ],
    "temperature" => 0.7
]);

curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo json_encode(['reply' => 'Lỗi khi gọi OpenAI: ' . curl_error($ch)]);
    curl_close($ch);
    exit;
}
curl_close($ch);

// Hiện nguyên JSON để xem OpenAI trả gì
header('Content-Type: application/json; charset=utf-8');
echo $response;
exit;

$result = json_decode($response, true);
$reply = $result['choices'][0]['message']['content'] ?? "Xin lỗi, tôi không hiểu.";
echo json_encode(['reply' => $reply]);
?>




