<?php
// require('cart.php');
// echo $INTERNAL;
require_once('functions.php');

$isTouch = isset($INTERNAL);
if(!$isTouch){
    exit();
}

if(!empty($_GET['cartId'])){
    $cartId=$_GET['cartId'];
}else{
    print(json_encode([]));
    exit();
}
$productId = $_GET['id'];
$productId = intVal($productId);
$query = "SELECT `price` FROM Products WHERE id = $productId";

if($result= mysqli_query($conn, $query)){
    if(!mysqli_num_rows($result)){
      throw new Exception('No item found');
    }

    $productData = [];
    while($row = mysqli_fetch_assoc($result)){
      $productData=$row;
    }
} else {
    throw new Exception('Query error: ' . mysqli_error($conn));
}

$price = $productData['price'];
$qty = $_GET['qty'];
$price = $price * $qty;
print($price);

$query = "UPDATE `cartItems` SET `count` = $qty, `price` = $price WHERE cartItems.cartID = $cartId and cartItems.productID = $productId";

if(!($result=mysqli_query($conn,$query))){
    throw new Exception('error');
} 
// $output=[];
// while($row=mysqli_fetch_assoc($result)){
//     $output[]=$row;
// }
// print(json_encode($output));
?>