<?php
header('content-type:text/html;charset=utf-8');
//1.
// $mysqli=new mysqli('localhost','root','123456');
// print_r($mysqli);
// $mysqli->select_db('test');
//2.
// $mysqli=new mysqli();
// $mysqli->connect('localhost','root','123456');
// print_r($mysqli);
// 3.
$mysqli = @new mysqli('localhost','root','123456','test');
if ($mysqli->connect_errno) {
    die('Connect Error:'.$mysqli->connect_error);
}
print_r($mysqli);
echo '<hr color="red" />';
echo "客户端的信息：".$mysqli->client_info.'<br/>';
echo $mysqli->get_client_info().'<br>';
echo "<hr color='red'>";
echo "客户端的版本：".$mysqli->client_version.'<br/>';
echo "<hr color='red'>";
echo "服务器端信息：".$mysqli->server_info.'<br>';
echo $mysqli->get_server_info();
echo '<hr/>';
echo "服务器版本：".$mysqli->server_version.'<br/>';
echo "<hr color='red'>";
