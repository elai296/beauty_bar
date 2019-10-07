<?php

// require('cart.php');
echo $INTERNAL;
require_once('functions.php');

$isTouch = isset($INTERNAL);
if(!$isTouch){
    exit();
}

$id = getBodyData()['id'];
$id = intVal($id);
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

// if(mysqli_num_rows($result)!==1){
//     throw new Exception('Error');
// }

// $_SESSION['cartId']=mysqli_insert_id();

$query="INSERT INTO `cartItems` (`count`, `productID`, `price`, `added`, `cartID`) VALUES (1, $id, $price, now(), $cartId) ON DUPLICATE KEY UPDATE count = count + 1";
$result= mysqli_query($conn, $query);

// error checking if you added anything
if(mysqli_affected_rows($conn)!==1){
    $errorMsg = 'Insert error: ' . mysqli_error($conn);
    $query="ROLLBACK";
    mysqli_query($conn, $query);
    throw new Exception($errorMsg);
}else{
    $query="COMMIT";
    mysqli_query($conn, $query);
}
?>