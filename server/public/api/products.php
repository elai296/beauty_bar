<?php
header('Content-Type: application/json');
require_once('functions.php');
require_once('db_connection.php');

set_exception_handler('error_handler');

$output=file_get_contents('dummy-products-list.json');
print($output);

?>
