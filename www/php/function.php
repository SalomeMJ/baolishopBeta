<?php 
function M()
{
	$obj=new ModelController;
	return $obj;
}
function __autoload($name){
	$dir="./".$name.".class.php";
	if(file_exists($dir)){
		include_once "$dir";
	}else{
		echo $name."该类不存在";
	}
}