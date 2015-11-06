<?php 
    header('content-type:text/html;charset=utf-8');
    $mysqli=new mysqli('localhost','root','123456','test');
    if ($mysqli->errno) {
        die('Connent Error:'.$mysqli->error);
    }
    $mysqli->set_charset('utf8');
    $username=$_POST['username'];
    $password=md5($_POST['password']);
    // ' or 1=1 #  存在sql注入风险
    // $sql="SELECT * FROM user WHERE username='{$username}' AND password='{$password}';";
    // $mysqli_result=$mysqli->query($sql);
    // if ($mysqli_result&& $mysqli_result->num_rows>0) {
    //     echo "登录成功";
    // }else{
    //     echo "登录失败";
    // }
    
    //预处理
$sql="SELECT * FROM user WHERE username=? AND password=?";
    $mysqli_stmt=$mysqli->prepare($sql);
    $mysqli_stmt->bind_param('ss',$username,$password);
    if ($mysqli_stmt->execute()) {
        $mysqli_stmt->store_result();
        if ($mysqli_stmt->num_rows>0) {
            echo "登陆成功";
        }else{
            echo "登陆失败";
        }
    }
    //释放结果集
    $mysqli_stmt->free_result();
    //关闭预处理语句
    $mysqli_stmt->close();
    $mysqli->close();

 ?>