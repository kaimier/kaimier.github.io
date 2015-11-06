<?php 
    header('content-type:text/html;charset=utf-8');
    require_once 'connect.php';
    require_once 'comment.class.php';
    $arr=array();
    $res=Comment::validate($arr);
    if ($res) {
        
    }else{
        echo '{"status":0,"errors":'.json_encode($arr).'}';
    }
 ?>