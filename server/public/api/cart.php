<?php

// header('Content-Type: application/json');
// require_once('functions.php');
// session_start();
// require('db_connection.php');
// set_error_handler('error_handler');

// $method = $_SERVER['REQUEST_METHOD'];
// // $item = file_get_contents('php://input');
// // define("INTERNAL", true);
// $INTERNAL = true;
// if($method === 'POST'){
//     require('cart_add.php');
// }else if($method === 'GET'){
//     require('cart_get copy.php');
    // require('cart_get.php');
}
// }else if($method === 'PUT'){
//     require('cart_update.php');
// }else if($method === 'DELETE'){
//     require('cart_remove2.php');
// }

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

header('Content-Type: application/json');
require_once('functions.php');
session_start();
require('db_connection.php');
set_error_handler('error_handler');
$method = $_SERVER['REQUEST_METHOD'];
$item = file_get_contents('php://input');
// define("INTERNAL", true);
$INTERNAL = true;
if($method === 'POST'){
    require('cart_add.php');
}else if($method === 'GET'){
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
