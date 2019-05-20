<?php

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$item = file_get_contents('php://input');

if ($method == 'GET') {
  readfile('dummy-cart-items.json');
} else if ($method == 'POST') {
  http_response_code(201);
  print($item);
} else {
  http_response_code(404);
  print(json_encode([
    'error' => 'Not Found',
    'message' => "Cannot $method /api/cart.php"
  ]));
}

?>
