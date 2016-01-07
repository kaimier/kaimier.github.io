<?php 
$mysqli=@new mysqli('localhost','root','123456','test');
if ($mysqli->connect_errno) {
    die('Connect Error:'.$mysqli->connect_error);
}
$mysqli->set_charset('utf8');
$sql=<<<EOF
    CREATE TABLE IF NOT EXISTS mysqli(
        id TINYINT UNSIGNED AUTO_INCREMENT KEY,
        username VARCHAR(20) NOT NULL
    );
EOF;
$res=$mysqli->query($sql);
var_dump($res); //boolen true
/**
 * SELECT/DESC/DESCRIBE/SHOW/EXPLAIN执行成功返回mysqli_result对象，执行失败返回false对于其它SQL语句的执行，成功返回true，反之false;
 */

 ?>