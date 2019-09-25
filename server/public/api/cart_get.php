<?php
// require('cart.php');
// echo $INTERNAL;
require_once('functions.php');

$isTouch = isset($INTERNAL);
if(!$isTouch){
    exit();
}

if(!empty($_SESSION['cartId'])){
    $cartId=$_SESSION['cartId'];
}else{
    print(json_encode([]));
    exit();
}

$query = "SELECT * from `cartItems` LEFT JOIN `Products` ON cartItems.productID=Products.id WHERE cartItems.cartID = $cartId";

if(!($result=mysqli_query($conn,$query))){
    throw new Exception('error');
} 
$output=[];
while($row=mysqli_fetch_assoc($result)){
    $output[]=$row;
}
print(json_encode($output));
?>