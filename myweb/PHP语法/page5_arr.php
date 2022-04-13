<?php
    header("content-type: text/html; charset=utf-8");
    // 数组的下标索引号自定义
    // $arr = array("name1"=>"zhangsan", "lisi", "wangwu"); //此时"zhangsan"的索引为 name1 后边的元素索引号从0开始排
    // $arr = array("zhangsan", "name2"=>"lisi", "wangwu");  索引号 依次为 0 name2 1
    // $arr = array("zhangsan", "lisi", "name3"=>"wangwu"); 索引号 依次为 name3 0 1
    $arr = array("name1"=>"zhangsan", "name2"=>"lisi", "name3"=>"wangwu");
    var_dump($arr);
    echo '<br>';
    echo $arr["name1"]; //输出索引号为name1的元素


    // 二维数组
    $arr1 = array();
    $arr1["zhangsan"] = array("age"=>"19", "sex"=>"male", "height"=>"180");
    $arr1["lisi"] = array("age"=>"18", "sex"=>"female", "height"=>"160");
    $arr1["wangwu"] = array("age"=>"21", "sex"=>"female", "height"=>"164");
    var_dump($arr1);

    $result1 = json_encode($arr1);
    echo $result1;
?>