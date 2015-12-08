<?php 
header('conntent-type:text/html;charset=utf-8');
$mysqli=new mysqli('localhost','root','123456','test');
if ($mysqli->connect_errno) {
	die('Connect error:'.$mysqli->connect_error);
}
$mysqli->set_charset('utf8');
$sql="SELECT id, username,age FROM user";
$mysqli_result=$mysqli->query($sql);
// var_dump($mysqli_result);
if ($mysqli_result&& $mysqli_result->num_rows>0) {
	// echo $mysqli_result->num_rows;
	// $rows=$mysqli_result->fetch_all(); //获取所有记录，二维数组
	// $rows=$mysqli_result->fetch_all(MYSQLI_ASSOC); //关联
	// $rows=$mysqli_result->fetch_all(MYSQLI_BOTH); //关联加索引
	// $row=$mysqli_result->fetch_row();//取得结果集中第一条记录作为索引数组返回
	// print_r($row); // 每fetch一次指针下移一位
	// echo "<hr>";
	// $row=$mysqli_result->fetch_assoc();//取得结果集中第一第记录作为关联数组返回
	// print_r($row);
	// echo "<hr>";
	// $row=$mysqli_result->fetch_array();
	// print_r($row);
	// echo "<hr>";
	// $row=$mysqli_result->fetch_array(MYSQLI_ASSOC);
	// print_r($row);
	// echo "<hr>";
	// $row=$mysqli_result->fetch_object();
	// print_r($row);
	// //移动结果集内部指针
	// $mysqli_result->data_seek(0);
	// $row = $mysqli_result->fetch_assoc();
	// print_r($row);
	while ($row = $mysqli_result->fetch_assoc()) {
		// print_r($row);
		// echo "<hr>";
		$rows[]=$row;
	}
	print_r($rows);
	// $mysqli_result->close();
	// $mysqli_result->free_result();
	$mysqli_result->free();
	// print_r($rows);
}else{
	echo "查询错误或者结果集中没有数据";
}
$mysqli->close();
