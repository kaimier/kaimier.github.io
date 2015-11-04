<?php
    $mysqli=new mysqli('localhost','root','123456','test');
    if ($mysqli->connect_errno) {
        die($mysqli->connect_error);
    }
    $mysqli->set_charset('utf8');
    $id=$_GET['id'];
    $sql="SELECT id,username,password,age FROM user WHERE id=".$id;
    $mysqli_result=$mysqli->query($sql);
    if ($mysqli_result && $mysqli_result->num_rows>0) {
        $row=$mysqli_result->fetch_assoc();
    }
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>编辑用户</title>
</head>
<body>
    <h2>编辑用户</h2>
    <form action="doAction.php?act=editUser&id=<?php echo $id;?>" method="post">
        <table border='1' cellspacing="0" cellpadding="0" bgcolor="#abcdef" width="80%">
            <tr>
                <td>用户名</td>
                <td><input type="text" name="username" id="" value="<?php echo $row['username'];?>"></td>
            </tr>
            <tr>
                <td>密码</td>
                <td><input type="password" name="password" id="" placeholder="请输入合法密码" required="required" ></td>
            </tr>
            <tr>
                <td>年龄</td>
                <td><input type="number" name="age" id="" min="1" max="125" value="<?php echo $row['age']; ?>" placeholder="请输入合法年龄" required="required" ></td>
            </tr>
            <tr>                
                <td colspan="2"> <input type="submit" value="编辑用户"></td>
            </tr>

        </table>
    </form>
</body>
</html>