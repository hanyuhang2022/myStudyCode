<?php
    $uname = $_GET["username"];
    if($uname == "zhangsan"){
        echo "username exists";
    } else {
        echo "username ok";
    }
?>