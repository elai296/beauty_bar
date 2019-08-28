<?php 
startup();
require_once('functions.php');
set_exception_handler('error_handler');
require_once('db_connection.php');


if(!empty($_GET['id'])){
  $id=$_GET['id'];
  if(!is_numeric($id)){
    throw new Exception("id needs to be a number");
  }
  $whereClause=" WHERE `id` =" . $id;
}else{
  $whereClause="";
}

$query= "SELECT * FROM `Products`$whereClause";
if($result= mysqli_query($conn, $query)){
  $output = [];
  while($row = mysqli_fetch_assoc($result)){
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
