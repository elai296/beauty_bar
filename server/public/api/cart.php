<?php

header('Content-Type: application/json');
require('functions.php');
session_start();
require('db_connection.php');
set_error_handler('error_handler');

$method = $_SERVER['REQUEST_METHOD'];
$item = file_get_contents('php://input');
define("INTERNAL", true);
if(POST){
    require('card_add.php');
}else if(GET){
    require('cart_get.php');
}

// if ($method == 'GET') {
//   readfile('dummy-cart-items.json');
// } else if ($method == 'POST') {w3
//   http_response_code(201);
//   print($item); 
//   http_response_code(404);
//   print(json_encode([
//     'error' => 'Not Found',
//     'message' => "Cannot $method /api/cart.php"
//   ]));
// }

?>
