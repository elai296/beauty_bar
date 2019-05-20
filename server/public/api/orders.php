<?php

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$order = file_get_contents('php://input');

if ($method != 'POST') {
  http_response_code(404);
  print(json_encode([
    'error' => 'Not Found',
    'message' => "Cannot $method /api/orders.php"
  ]));
} else {
  http_response_code(201);
  print($order);
}
