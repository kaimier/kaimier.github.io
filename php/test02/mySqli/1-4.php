<?php 
    $myuser=@new mysqli('localhost','root','','test');
    if ($myuser->connect_errno) {
        die('Connect Error:'.$myuser->connect_error);
    }
    $myuser->set_charset('utf8');
    $sql= <<<EOF
        CREATE TABLE IF NOT EXISTS user(
            id TINYINT UNSIGNED AUTO_INCREMENT KEY,
            username VARCHAR(20) NOT NULL,
            password CHAR(32) NOT NULL,
            age TINYINT UNSIGNED DEFAULT 18
        )
EOF;
    $res=$myuser->query($sql);
    var_dump($res);
    $myuser->close();
 ?>