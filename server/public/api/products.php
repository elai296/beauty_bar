<?php

header('Content-Type: application/json');

if (empty($_GET['id'])) {
  readfile('dummy-products-list.json');
} else {
  readfile('dummy-product-details.json');
}

?>
