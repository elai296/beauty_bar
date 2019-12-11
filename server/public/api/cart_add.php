<?php

// require('cart.php');
// echo $INTERNAL;
require_once('functions.php');
require_once('db_connection.php');
$isTouch = isset($INTERNAL);
if(!$isTouch){
    exit();
}

$id = $_GET['id'];
$id = intVal($id);
$quantity = $_GET['quantity'];
$quantity = intVal($quantity);
if($id<=0){
    throw new Exception('Id is not valid');
}
if(!empty($_SESSION['cartId'])){
    $cartId=$_SESSION['cartId'];
}else{
    $cartId=false;
}

$query = "SELECT `price` FROM Products WHERE id = $id";

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

$query="START TRANSACTION";
mysqli_query($conn, $query);
if($cartId===false){
    $query="INSERT INTO `cart` (`created`) VALUES (now())";
    $result= mysqli_query($conn, $query);
    $cartId = mysqli_insert_id($conn);
    $_SESSION['cartId'] = $cartId;
}

if(!$result){
    throw new Exception('Error');
}
$query  = "INSERT INTO `cartItems` (`cartID`,`productID`,`count`,`price`,`added`) VALUES($cartId,$id,$quantity,$price,now()) ON DUPLICATE KEY UPDATE `count` = `count` + $quantity";
$result= mysqli_query($conn, $query);

if(mysqli_affected_rows($conn)===0){
    $errorMsg = 'Insert error: ' . mysqli_error($conn);
    $query="ROLLBACK";
    mysqli_query($conn, $query);
    throw new Exception($errorMsg);
}else{
    $query="COMMIT";
    mysqli_query($conn, $query);
}

?>