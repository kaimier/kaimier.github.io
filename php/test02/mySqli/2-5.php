<?php 
    header('content-type:text/html; charset=utf-8');
    $mysqli=new mysqli('localhost','root','123456','test');
    if ($mysqli->errno) {
        die('Connect Error:'.$mysqli->error);
    }
    $mysqli->set_charset('utf8');
    $sql="SELECT id,username,age FROM user WHERE id>=?";
    $mysqli_stmt=$mysqli->prepare($sql);
    $id=110;
    $mysqli_stmt->bind_param('i', $id);

    if ($mysqli_stmt->execute()) {
        //bind_result():绑定结果集中的值到变量
         $mysqli_stmt->bind_result($id,$username,$age);
         while ($mysqli_stmt->fetch()) {
             echo "编号：".$id,'<br>';
             echo "用户名：".$username,'<br>';
             echo "年龄：".$age.'<br>';
             echo "<hr>";
         }
    }
    $mysqli_stmt->free_result();
    $mysqli_stmt->close();
    $mysqli->close();
 ?>