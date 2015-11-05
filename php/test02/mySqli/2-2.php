<?php 
    header('content-type:text/html; charset=utf-8');
    $mysqli=new mysqli('localhost','root','123456','test');
    if ($mysqli->errno) {
        die('Connect Error:'.$mysqli->error);
    }
    $mysqli->set_charset('utf8');
    $sql="SELECT id,username,age FROM user;";
    $sql.="SELECT * FROM mysql.user;";
    $sql.="SELECT CURRENT_USER;";
    $sql.="SELECT NOW();";
    //use_result()/store_result();
    //more_results():检测是否有更多的结果集;
    //next_result():将结果集指针向下移动一位
    
    // $mysql->multi_query($sql);
    if ($mysqli->multi_query($sql)) {
        do {
            if($mysqli_reslut=$mysqli->store_result()){
               $rows[]=$mysqli_reslut->fetch_all(MYSQLI_ASSOC);
            }
        } while ($mysqli->more_results() && $mysqli->next_result());
    }else {
        echo $mysqli->error;
    }
    print_r($rows);
    $mysqli->close();
 ?>