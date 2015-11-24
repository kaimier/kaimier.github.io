<?php 
    header('content-type:text/html; charset=utf-8');
    // 通过MySQLi类库操作数据库的步骤：
    // 1.建立到MySQL的连接
    // 2.打开指定的数据库
    // 3.设置默认客户端的字符集
    // 4.执行SQL查询
    // 5.释放结果集
    // 6.关闭连接

    // //1.建立到MySQL数据的连接 
    // $mysqli=new mysqli('localhost','root','123456');
    // print_r($mysqli); //得到mysqli对象 
    // //2.打开指定的数据库
    // $mysqli-> select_db('test');
    // $mysqli = new mysqli();//面向对象
    // $mysqli-> connect('127.0.0.1','root','123456');
    // print_r($mysqli);
    // $mysqli->select_db('test');
    //建立连接的同时打开指定的数据库
    $mysqli=@new mysqli('localhost','root','123456','test');
    // print_r($mysqli);
    if ($mysqli->connect_errno) {
        die('Connect Error:'.$mysqli->connect_error);
    }
    //密码错误时
    // $mysqli=@new mysqli('localhost','root','','test');
    // print_r($mysqli);
    // $mysqli->connect_errno:得到连接的产生的错误编号（1045）
    // $mysqli->connect_error:得到连接的产生的错误信息(Access denied for user 'root'@'localhost' (using password: YES))
    // if ($mysqli->connect_errno) {
    //     die('Connect Errror:'.$mysqli->connect_error);
    // }
    // print_r($mysqli);
    echo '<hr color="red" />';
    echo "客户端的信息:".$mysqli->client_info.'<br/>';
    echo "客户端的信息:".$mysqli->get_client_info().'<br/>';
    // echo "客户端的信息:".$mysqli->get_client_info().'<br/>';
    echo '<hr color="red" />';    
    echo "客户端的版本:".$mysqli->client_version.'<br/>';
    // echo "客户端的版本:".$mysqli->client_version.'<br/>';
    echo '<hr color="red" />';
    echo "服务器端信息:".$mysqli->server_info.'<br/>';
    echo "服务器端信息:".$mysqli->get_server_info().'<br/>';
    // echo '<hr color="red" />';
    echo "服务器版本:".$mysqli->server_version.'<br/>';
    // echo "服务器版本:".$mysqli->get_server_version().'<br/>';//不存在这个方法

 ?>