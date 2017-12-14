<?php
	header('Access-Control-Allow-Origin:*');
include_once "./function.php";

     $obj=new MessageController;
     
     $fun=$_GET['code'];
     if($_GET['code']){
     	$obj->$fun();	
     }
     
?>