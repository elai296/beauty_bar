<?php
    require_once('functions.php');
    set_exception_handler('handleError');
    require_once('config.php');
    require_once('db_connection.php');

    if(empty($_GET['id'])){
        throw new Exception('You must send an id with your request');
    };

    if(empty($_GET['id_products'])){
        throw new Exception('You must send an id with your request');
    };
    
    $output['success'] = false;
    $id = (int)$_GET['id'];
    $quantity_query="SELECT `count` FROM `cartitems` WHERE `id`=$id";
    $quantity_result = mysqli_query($conn, $quantity_query);
    $quantity_data= mysqli_fetch_assoc($quantity_result);
    $quantity= (int)$quantity_data['count'];
    $delete_query = "DELETE FROM `cartitems` WHERE `id` = $id";
    $result = mysqli_query($conn, $delete_query);
    if(!$result){
        throw new Exception(mysqli_error($conn));
    }
    if(mysqli_affected_rows($conn) === 0){
        throw new Exception('cart item was not deleted');
    }
    $output['success'] = true;
    $products_id=(int)$_GET['id_product'];
    $price_query="SELECT price FROM Products WHERE id=$products_id";
    $price_result=mysqli_query($conn, $price_query);
    $price_data=mysqli_fetch_assoc($price_result);
    $price=(int)$price_data['price'];
    $deleteTotal=$quantity*$price;
    $carts_id = $_SESSION['carts_id'];
    $update_cart_query="UPDATE `carts` SET 
    `item_count`=(SELECT COALESCE(SUM(quantity),0) FROM cart_items WHERE carts_id = $carts_id),
    `total_price`= `total_price` - $deleteTotal
    WHERE `id` = $carts_id";
    $update_result = mysqli_query($conn, $update_cart_query);
    if(!$update_result){
        throw new Exception(mysqli_error($conn));
    }
    if(mysqli_affected_rows($conn) === 0){
        throw new Exception('cart was not updated');
    }
    $output['update'] = true;
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