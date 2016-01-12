<?php
header('content-type:text/html;charset=utf-8');
//接收页面
$mysqli=@new mysqli('localhost','root','123456','test');
if ($mysqli->connect_errno) {
    die('connect Error:'.$mysqli->connect_error);
}
$mysqli->set_charset('utf8');
$username=$_POST['username'];
$username=$mysqli->escape_string($username);
$password=md5($_POST['password']);
$age=$_POST['age'];
$act=$_GET['act'];
//根据不同操作完成不同功能
switch ($act) {
    case 'addUser':
        // echo "添加用户的操作";
        $sql="INSERT user(username,password,age) VALUES('{$username}','{$passowrd}','{$age}')";
        $res=$mysqli->query($sql);
        $affect_rows=$mysqli->insert_id;
        if ($res) {
            echo "<script type='text/javascript'>alert('添加成功，网站的第{$affect_rows}位用户'); location.href='userList.php';</script>";
        }else{
            echo "<script type='text/javascript'>
            alert('添加失败，重新添加');
            location.href='userList.php';</script>
            ";
        }
        break;
    
    default:
        # code...
        break;
}