<?php
    header('content-type:text/html; charset=utf-8');
    $mysqli=new mysqli('localhost','root','123456','test');
    if ($mysqli->errno) {
        die('Connect Error:'.$mysqli->error);
    }
    $mysqli->set_charset('utf8');
    $sql="INSERT user(username,password,age) VALUES('imooc2','imooc2',22);";
    $sql.="UPDATE user SET age=100 WHERE id=100;";
    $sql.="DELETE FROM user WHERE id=101;";
    // $mysqli->query($sql);
    // 针对多条SQL语句的查询
    
    $res=$mysqli->multi_query($sql);
    var_dump($res);
 ?>