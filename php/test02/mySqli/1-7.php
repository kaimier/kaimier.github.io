<?php 
    header('content-type:text/html;charset=utf-8');
    $mysqli=new mysqli('localhost','root','123456','test');
    if ($mysqli-> connect_errno) {
        die('Connect error:'.$mysqli->connect_error);
    }
    $mysqli->set_charset('utf8');
    $sql="SELECT id,username,age FROM user";
    $mysqli_result=$mysqli->query($sql);
    // print_r($mysqli_result);
    // var_dump($mysqli_result);
    // var_dump(mysql_fetch_assoc($result)
    // var_dump(mysql_fetch_array($result));
    // var_dump(mysqli_fetch_array($mysqli_result));
    // var_dump($mysqli_result);
    if ($mysqli_result && $mysqli_result->num_rows>0) {//查询结果存在并且数据大于0时
         //echo $mysqli_result->num_rows;
         // $rows=$mysqli_result->fetch_all();//获取结果集中所有记录，默认返回的是二维的索引+索引形式
         // $rows=$mysqli_result->fetch_all(MYSQLI_NUM); //索引
         // $rows=$mysqli_result->fetch_all(MYSQLI_ASSOC);//关联
        // $rows=$mysqli_result->fetch_all(MYSQLI_BOTH); 索引关联都有
        // $row=$mysqli_result->fetch_row();// 一维数据第一条记录作为索引数组返回
        // print_r($row);
        // echo "<hr/>";
        // $row=$mysqli_result->fetch_assoc();// 一维数据下一条记录作为关联数组返回
        // print_r($row);
        // echo "<hr/>";
        // $row=$mysqli_result->fetch_array();//下一条（第fetch一次指针下移一次)记录作为两都都有数据返回;
        // print_r($row);

        // echo "<hr/>";
        // $row=$mysqli_result->fetch_array(MYSQLI_ASSOC);
        // print_r($row);

        // echo "<hr/>";
        // $row=$mysqli_result->fetch_object(); //对象
        // print_r($row);

        // echo "<hr/>";
        // //移动结果集中的指针
        // $mysqli_result->data_seek(0);
        // $row=$mysqli_result->fetch_assoc();
        // print_r($row);
        // print_r($rows);
        
        while ($row=$mysqli_result->fetch_assoc()) {
            // print_r($row);
            // echo "<hr/>";
            $rows[]=$row;
        }
        print_r($rows);
        //释放结果集
        // $mysqli_result->close();
        // $mysqli_result->free_result();
        $mysqli_result->free();
    }else{
        echo "查询错误或者结果集中没有记录";
    }
    $mysqli->close();
 ?>