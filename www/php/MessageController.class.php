<?php
   class  MessageController{
   	
   	public function waterData(){
   		
   		  	//返回水的数据
   	   $data=$_GET;
   	   $waterData=M()->select_sql("SELECT * FROM waterData");
   	   $waterData=json_encode($waterData);
   		echo $waterData;
   		
   	}
   	
   	
   	  	public function yanjiuData(){
   		
   		  	//返回水的数据
   	   $data=$_GET;
   	   $yanjiuData=M()->select_sql("SELECT * FROM yanjiuData");
   	   $yanjiuData=json_encode($yanjiuData);
   		echo $yanjiuData;
   		
   	}
   	
   	
   		public function mimianData(){
   		
   		  	//返回水的数据
   	   $data=$_GET;
   	   $mimianData=M()->select_sql("SELECT * FROM mimianData");
   	   $mimianData=json_encode($mimianData);
   		echo $mimianData;
   		
   	}
   	
   	public function liangyouData(){
   		
   		  	//返回水的数据
   	   $data=$_GET;
   	   $liangyouData=M()->select_sql("SELECT * FROM liangyouData");
   	   $liangyouData=json_encode($liangyouData);
   		echo $liangyouData;
   		
   	}
   	
   	
   	 	public function fuchanData(){
   		
   		  	//返回水的数据
   	   $data=$_GET;
   	   $fuchanData=M()->select_sql("SELECT * FROM fuchanData");
   	   $fuchanData=json_encode($fuchanData);
   		echo $fuchanData;
   		
   	}
   	
 
   }
?>