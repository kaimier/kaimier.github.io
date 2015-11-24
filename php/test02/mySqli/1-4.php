<?php 
// 创建user表
$mysqli=@new mysqli('localhost','root','123456','test');
if ($mysqli->connect_errno) {
    die('Connect error:'.$mysqli->connect_error);
}
$mysqli->set_charset('utf8');
$sql= <<<EOF
        CREATE TABLE IF NOT EXISTS user(
            id TINYINT UNSIGNED AUTO_INCREMENT KEY,
            username VARCHAR(20) NOT NULL,
            password CHAR(32) NOT NULL,
            age TINYINT UNSIGNED DEFAULT 18
        )
EOF;
$res=$mysqli->query($sql);
var_dump($res); //bool(true);
$mysqli->close();