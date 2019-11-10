<?php
  function error_handler($errorCode, $error){
    var_dump($error);
    $output=array("success"=>false, "error"=>$error/*->getMessage()*/);
    http_response_code(500);
    $json_output= json_encode(array($output));
    print($json_output);
  }
  function startup(){
      header("Content-type:application/json");
  }
  function getBodyData(){
    $json=file_get_contents('php://input');
    $data= json_decode($json, true);
    return $data;
  }

?>