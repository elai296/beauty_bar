<?php
echo $INTERNAL;
require_once('functions.php');
$isTouch = isset($INTERNAL);
if(!$isTouch){
    exit();
}
$id = (int)$_GET['id'];
$id = intval($id);
print($_GET['id']);
if($id<=0){
    throw new Exception('ID is not valid');
}
if(!empty($_SESSION['cartId'])){
    $cartId=$_SESSION['cartId'];
}else{
    $cartId=false;
}
$query="DELETE FROM `cartItems` WHERE `productID` = $id and `cartID` = $cartId";
$result= mysqli_query($conn, $query);

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