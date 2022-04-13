<?php
    header("content-type: text/html; charset=utf-8");

    // 预定义变量

    // Get请求：参数再url后买你，多个参数用&连接
    
    // $GET["参数名"]

    $username = $_GET["username"];
    $password = $_GET["password"];
    if($username == "admin" && $password == "123") {
        echo "Login Success";
    } else {
        echo "Login Failed";
    }
?>