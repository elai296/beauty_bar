<?php 
header('Content-Type: application/json');
require_once('functions.php');
set_exception_handler('error_handler');
startup();
require_once('db_connection.php');


$id=$_GET['id'];
$query2 ="SELECT GROUP_CONCAT(url_image) AS images
  FROM Images
  WHERE id_product = $id
  GROUP BY id_product";

$query = "SELECT P.*
  FROM Products AS P
  WHERE P.id = $id";

if($result= mysqli_query($conn, $query2)){
    $output = [];
    while($row = mysqli_fetch_assoc($result)){
      // $row['images']=
      $image[]=$row;
    }
    if(isset($id) && empty($image)){
      throw new Exception("invalid ID: " . $id);
    }
    $img=json_encode($image);
  } else{
    print('No result');
  }

if($result= mysqli_query($conn, $query)){
    $output = [];
    while($row = mysqli_fetch_assoc($result)){
      // $row['images']=
      $output[]=$row;
    }
    if(isset($id) && empty($output)){
      throw new Exception("invalid ID: " . $id);
    }
    $output = json_encode($output);
    print($output);
  } else{
    print('No result');
  }

?>