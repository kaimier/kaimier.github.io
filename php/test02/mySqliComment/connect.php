<?php 
    $mysqli=new mysqli('localhost','root','123456','test');
    if ($mysqli->errno) {
        die('Connect error:'.$mysqli->error);
    }else{
        $mysqli->set_charset('utf8');
    }
 ?>