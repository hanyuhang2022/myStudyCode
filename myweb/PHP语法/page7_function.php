<?php
    header("content-type:text/html; charset=utf-8");

    // 系统函数 可以直接使用
        // $arr = array("zhangsan", "lisi", "wangwu");
        // print_r($arr);
        // var_dump($arr);
        // $result = json_encode($arr);
        // $count = count($arr);


        //调用自定义的函数 
    $addResult = add(2, 3);
    echo $addResult;
    
    // 自定义函数
    function add($num1, $num2) {
        $result = $num1 + $num2;
        return $result;
    }
?>