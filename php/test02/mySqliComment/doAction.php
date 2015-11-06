<?php 
    header('content-type:text/html;charset=utf-8');
    require_once 'connect.php';
    require_once 'comment.class.php';
    $arr=array();
    $res=Comment::validate($arr);
    if ($res) {
        $sql="INSERT comments(username,email,url,face,content,pubTime) VALUES(?,?,?,?,?,?);";
        $mysqli_stmt=$mysqli->prepare($sql);
        $arr['pubTime']=time();
        $mysqli_stmt->bind_param('sssssi',$arr['username'],$arr['email'],$arr['url'],$arr['face'],$arr['content'],$arr['pubTime']);
        $mysqli_stmt->execute();
        $comment=new Comment($arr);
        echo json_decode(array('status'=>1,'html'=>$comment->output()));
    }else{
        echo '{"status":0,"errors":'.json_encode($arr).'}';
    }
 ?>