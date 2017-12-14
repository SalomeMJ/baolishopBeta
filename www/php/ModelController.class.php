<?php 
header("Content-type:text/html;charset=utf8");
class ModelController{
	protected $dsn="mysql:host=localhost;dbname=baolishop";
	protected $user="root";
	protected $pass="";
	static $pdo;
	function __construct(){
		if(is_null(self::$pdo)){
			try {
				self::$pdo=new pdo($this->dsn,$this->user,$this->pass);
				self::$pdo->query("SET NAMES UTF8");
				self::$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
			} catch (Exception $e) {
				echo $e;
			}
		}
	}
	//1064语法有问题
	public function select_sql($sql){
		// SELECT * FROM table WHERE ID;
		$result=self::$pdo->query($sql);//仅仅用来查询数据库
		$row=$result->fetchAll(PDO::FETCH_ASSOC);//按照关联形式得到数据
		return $row;
	}
	public function delete_sql($table,$id){
		// DELETE FROM table WHERE id=$id;
		//对行数造成影响的使用exec
		//字段名  key
		$row=self::$pdo->exec("DELETE FROM {$table} WHERE id={$id}");
		return $row;
	}
	public function insert_sql($table,$data){
		// insert into student (id,name,sex,age) values ('141184003','王五','男','23');
		$str=implode(",",array_keys($data));//获取数组中的value
		$datas="'".implode("','",$data)."'";
		$row=self::$pdo->exec("INSERT INTO {$table} ({$str}) VALUES ({$datas})");
		return $row;
	}
	public function update_sql($table,$data,$id){
		// update table set name="老刘",sex="男" WHERE id='141184001';
		$str='';
		foreach ($data as $k => $v) {
			$str.=','.$k.'="'.$v.'"';
		}
		$str=substr($str,1);
		$row=self::$pdo->exec("UPDATE {$table} SET {$str} WHERE id={$id}");
		return $row;
	}
}