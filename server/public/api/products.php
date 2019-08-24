<?php 
header('Content-Type: application/json');
require_once('functions.php');
set_exception_handler('error_handler');
startup();
require_once('db_connection.php');


if(!empty($_GET['id'])){
  $id=$_GET['id'];
  if(!is_numeric($id)){
    throw new Exception("id needs to be a number");
    // if(count($output)===0){
    //   throw new Exception("invalid ID: " . $id);
    // }
  }
  $whereClause="WHERE `id` =" . $id;
}else{
  $whereClause="";
}

$query= "SELECT * FROM `Products` " . $whereClause;
if($result= mysqli_query($conn, $query)){
  $ouput=[];
  while($row = mysqli_fetch_assoc($result)){
    $output[]=$row;
    print($output);
  }
  if(count($output)===0){
    throw new Exception("invalid ID: " . $id);
  }
  print(json_encode($output));
}

// header('Content-Type: application/json');
// if (empty($_GET['id'])) {
//   readfile('dummy-products-list.json');
// } else {
//   readfile('dummy-product-details.json');
// }

$output=file_get_contents('dummy-products-list.json');
print($output);

?>
