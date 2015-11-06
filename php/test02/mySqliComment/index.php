<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="style/style.css">
</head>
<body>
    <h1>评论系统</h1>
    <div id="mian">
        <div id="addCommentContainer">
            <form action="" method="post" id="addCommentForm">
                <div>
                    <label for="username">昵称</label>
                    <input type="text" name="username" id="username" required='required' placeholder='请输入您的加昵称' />
                    <label for="face">头像</label>
                    <div id="face">
                        <input type="radio" name="face" checked="checked" value="1"><img src="img/1.jpg" height="50" width="50" alt="">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="face" value="2"><img src="img/2.jpg" height="50" width="50" alt="">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="face" value="3"><img src="img/3.jpg" height="50" width="50" alt="">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="face" value="4"><img src="img/4.jpg" height="50" width="50" alt="">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="face" value="5"><img src="img/5.jpg" height="50" width="50" alt="">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <label for="email">邮箱</label>
                    <input type="email" name="email" id="email" required='required' placeholder='请输入合法邮箱'>
                    <label for="url">个人博客</label>
                    <input type="url" name="url" id="url">
                    <label for="content">评论内容</label>
                    <textarea name="content" id="content" cols="20" rows="5" required="required" placeholder='请输入您的评论。。。'></textarea>
                    <input type="submit" value="发布评论" id="submit">
                    </div>
            </form>
        </div>
    </div>
    <script src="../content/js/jquery.js"></script>
    <script src="script/comment.js"></script>
</body>
</html>