<?php 
header('content-type:text/html;charset=utf-8');
$mysqli=new mysqli('localhost','root','123456','test');
if ($mysqli->connect_errno) {
	die('Connect Error:'.$mysqli->connect_error);
}
$mysqli->set_charset('utf8');
// $sql="INSERT user(username,password) VALUES('king','king');";
// $sql.="DROP TABLE user;"; query()只能执行一条sql语句
$sql="INSERT user(username,password) VALUES('queen1','queen1'),('queen2','queen2'),('queen3','queen3');";
$res=$mysqli->query($sql);
if ($res) {
	//得到上一个插入操作产生的AUTO_INCREMENT的值 
	echo "恭喜您注册成功,您是网站第".$mysqli->insert_id.'位用户<br>';
	//返回上一个操作受影响的条数
	echo "有".$mysqli->affected_rows.'记录被影响';
}else{
	echo "ERROR:".$mysqli->errno.':'.$mysqli->error;
}
echo "<hr/>";
//将表中id>=6的用户删除掉
$sql="DELETE FROM user WHERE id<=6";
$res=$mysqli->query($sql);
if($res){
	echo $mysqli->affected_rows.'条记录被删除';
}else{
	echo "ERROR:".$mysqli->errno.':'.$mysqli->error;
}
/*
affected-rows值为3种：
1.受影响的记录条数
2.-1，代表sql语句有问题
3.0，代表没有受影响记录的条数
*/
$mysqli->close();