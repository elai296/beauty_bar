<?php

header('Content-Type: application/json');
require_once('functions.php');
session_start();
require_once('db_connection.php');
set_error_handler('error_handler');

$method = $_SERVER['REQUEST_METHOD'];
$INTERNAL = true;
if($method === 'POST'){
    require('cart_add.php');
}else if($method === 'GET'){
    require('cart_get.php');

}else if($method === 'PUT'){
    require('cart_update.php');
}else if($method === 'DELETE'){
    require('cart_remove2.php');
}

?>
