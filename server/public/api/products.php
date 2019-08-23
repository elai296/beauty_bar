<?php
header('Content-Type: application/json');
require_once('functions.php');
set_exception_handler('error_handler');
startup();
require_once('db_connection.php');

$query= "SELECT * FROM `Products`";
if($result= mysqli_query($conn, $query)){
  $ouput=[];
  while($row = mysqli_fetch_assoc($result)){
    $output[]=$row;
  }
  print(json_encode($output));
}






// $output=file_get_contents('dummy-products-list.json');
// print($output);

?>
