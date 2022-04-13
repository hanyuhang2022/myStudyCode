<?php
header("content-type: text/html; charset=utf-8");
// 定义了一个空数组 arr
    $arr = array();
    $arr[0] = "zhangsan";
    $arr[1] = "lisi";
    $arr[2] = "wangwu";
    echo $arr[0]; //输出了数组第一个元素
    // echo $arr; 会报错，因为数组是复杂数据类型 echo只能输出字符串
    echo "<br>";

    // 复杂类型数据输出的两种方法
    // (1) print_r()
    print_r($arr);
    echo "<br>";
    // (2) var_dump()
    var_dump($arr);
    echo "<br>";

    // json_encode() 将数组转化为json格式的字符串
    $result = json_encode($arr);
    echo $result;
?>