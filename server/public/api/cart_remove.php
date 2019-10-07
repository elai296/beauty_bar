<?php

echo $INTERNAL;
require_once('functions.php');

$isTouch = isset($INTERNAL);
if(!$isTouch){
    exit();
}

$id = getBodyData()['id'];
$id = intval($id);
print($id);
// if($id<=0){
//     throw new Exception('ID is not valid');
// }

// // --- Get price query ---
 
// // $query = "SELECT `price` FROM Products WHERE id = $id";

// // if($result= mysqli_query($conn, $query)){
// //     if(!mysqli_num_rows($result)){
// //       throw new Exception('No item found');
// //     }

// //     $productData = [];
// //     while($row = mysqli_fetch_assoc($result)){
// //       $productData=$row;
// //     }
// // } else {
// //     throw new Exception('Query error: ' . mysqli_error($conn));
// // }

// // $price = $productData['price'];

// // $query="START TRANSACTION";



// // Check if cart exist in session yet

// if(!empty($_SESSION['cartId'])){
//     $cartId=$_SESSION['cartId'];
// }else{
//     $cartId=false;
// }

// // if cartID doesn't exist, create new cart in cart table

// // mysqli_query($conn, $query);
// // if($cartId===false){
// //     $query="INSERT INTO `cart` (`created`) VALUES (now())";
// //     $result= mysqli_query($conn, $query);
// //     $cartId = mysqli_insert_id($conn);
// //     $_SESSION['cartId'] = $cartId;
// // }
// // if(!$result){
// //     throw new Exception('Error');
// // }

// //

// // Delete production from shopping cart
// $query="DELETE FROM `cartItems` WHERE `productID` = $productId and `cartID` = $cartId";
// $result= mysqli_query($conn, $query);

// // error checking if you added anything
// if(mysqli_affected_rows($conn)!==1){
//     $errorMsg = 'Insert error: ' . mysqli_error($conn);
//     $query="ROLLBACK";
//     mysqli_query($conn, $query);
//     throw new Exception($errorMsg);
// }else{
//     $query="COMMIT";
//     mysqli_query($conn, $query);
// }
?>