<?php 
    header('content-type:text/html;charset=utf-8');
    $mysqli=new mysqli('localhost','root','','test');
    if ($mysqli->connect_errno) {
        die('Connect Error:'.$mysqli->connect_error);
    }
    $mysqli->set_charset('utf8');
    // $sql="INSERT user(username,password1) VALUES('A','A')";
    // $mysqli->query($sql);
    // // echo $mysqli->affected_roms;
    // echo $mysqli->affected_rows; //-1;出错时返回-1;
    
    $sql='DELETE FROM USER WHERE id=1';
    $mysqli->query($sql);
    echo $mysqli->affected_rows; //0; 没有受影响的记录，返回0;
    /**
     * 1:受影响记录条数；
     * 2：-1代表SQL语句有问题
     * 3: 0代表没有受影响数据记录;
     */
 ?>