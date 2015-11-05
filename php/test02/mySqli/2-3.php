<?php 
    header('content-type:text/html;charset=utf-8');
    $mysqli=new mysqli('localhost','root','123456','test');
    if ($mysqli->errno) {
        die('Connect error:'.$mysqli->error);
    }
    $mysqli->set_charset('utf8');
    $sql="INSERT user(username,password,age) VALUES(?,?,?)";
    //准备预处理语句
    $mysqli_stmt=$mysqli-> prepare($sql);
    // print_r($mysqli_stmt);
    // s,i,d (string/ intger /double) 字符串类型
    $username='king';
    $password=md5('king');
    $age=12;
    //绑定参数
    $mysqli_stmt->bind_param('ssi',$username,$password,$age);

    //执行预处理语句
    if ($mysqli_stmt->execute()) {
        echo $mysqli_stmt->insert_id;
        echo "<br />";
    } else {
        $mysqli_stmt->error;
    }
    
    
 ?>