<?php 
header('Content-Type: application/json');
require_once('functions.php');
set_exception_handler('error_handler');
startup();
require_once('db_connection.php');


$whereClause="";
if(!empty($_GET['id'])){
  $id=$_GET['id'];

  if(!is_numeric($id)){
    throw new Exception("id needs to be a number");
  }
  $query = "SELECT P.id, P. brand, P.name, P.price, P.shortDescription, P.longDescription, I.images
  FROM Products AS P
  JOIN (
    SELECT id_product, GROUP_CONCAT(url_image) AS images
      FROM Images
      WHERE id_product = $id
      GROUP BY id_product
  ) AS I on P.id = I.id_product
  WHERE P.id = $id";
  
}else{
  $query="SELECT P.id,  P.brand, P.name, P.price, P.shortDescription, I.url_image as `image` 
  FROM Products as P
  left JOIN (
    SELECT `url_image`, `id_product` 
      FROM `Images` 
      WHERE `id_image` 
        IN (
          SELECT min(`id_image`) as min_image 
          FROM `Images` 
          GROUP BY `id_product`
        )
    ) as I
  ON id = id_product
  ORDER BY id
  -- WHERE id = 13";
  
}


if($result= mysqli_query($conn, $query)){
  $output = [];
  while($row = mysqli_fetch_assoc($result)){
    if(!empty($_GET['id'])){
      $row['images']= explode(",", $row['images']);
    }
    $output[]=$row;
  }
  if(isset($id) && empty($output)){
    throw new Exception("invalid ID: " . $id);
  }
  print(json_encode($output));
} else{
  print('No result');
}



?>
