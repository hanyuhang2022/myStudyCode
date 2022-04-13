<?php
    $uname = $_POST["username"];
    // 查询是否存在该用户名 (按道理来说这里是应该查询数据库的)
    if($uname == "zhangsan") {
        echo "username exists";
    } else {
        echo "username ok";
    }
?>