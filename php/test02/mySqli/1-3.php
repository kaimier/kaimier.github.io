<?php 
    //1.建立到mysql的连接
    $mysqli=@new mysqli('localhost','root','123456','test');
    if ($mysqli->connect_errno) {
        die('Connect Error:'.$mysqli->connect_error);
    }
    //2. 设置默认的客户端编码方式utf_8;
    $mysqli->set_charset('utf8');
    //3.执行数据库操作
    $sql=<<<EOF
        CREATE TABLE IF NOT EXISTS mysqli(
            id TINYINT UNSIGNED AUTO_INCREMENT KEY,
            username VARCHAR(20) NOT NULL
        );
EOF;
$res=$mysqli->query($sql);
var_dump($res);//boolen true;
/**
 * SELECT/DESC/DESCRIBE/SHOW/EXPLAIN执行成功返回mysqli_result对象; 失败返回false;
 * 对于其它sql语句的执行，成功返回true,否则返回false;
 */

//关闭链接
$mysqli->close();