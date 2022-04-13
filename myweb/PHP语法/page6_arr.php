<?php
header("content-type: text/html; charset=utf-8");
// // 1、传统for循环 遍历数组元素
//     //1.声明一个数组 
//     $arr = array("zhangsan", "lisi", "wangwu");
//     // count()方法可以返回数组的长度
//     for($i = 0; $i<count($arr); $i++) {
//         $temp = $arr[$i];
//         // 字符串连接一定用.
//         echo $temp . "<br>";
//     }

    // $arr = array("name1" => "zhangsan", "name2" => "lisi", "name3" => "wangwu");
    // for($i = 0; $i<count($arr); $i++) {
    //     $temp = $arr[$i];
    //     echo $temp . "<br>";
    // }


    // 2、自定义了数组元素的索引号 遍历方法 foreach()遍历
    $arr1 = array("name1" => "zhangsan", "name2" => "lisi", "name3" => "wangwu");
        //取除数组中每个键值对 
    foreach($arr1 as $key => $value) {
        // echo "{$key}==>{$value}<br>";
        echo $key . ">>>" . $value . "<br>";
    }

    // $h51701 = array(
    //     "group1"=>array(
    //      array("name"=>"张三","age"=>14,"sex"=>"男"),
    //      array("name"=>"张三","age"=>14,"sex"=>"男"),
    //      array("name"=>"张三","age"=>14,"sex"=>"男")
    //     ),
    //     "group2"=>array(
    //      array("name"=>"张三","age"=>14,"sex"=>"男"),
    //      array("name"=>"张三","age"=>14,"sex"=>"男"),
    //      array("name"=>"张三","age"=>14,"sex"=>"男")
    //     ),
    //     "group3"=>array(
    //      array("name"=>"张三","age"=>14,"sex"=>"男"),
    //      array("name"=>"张三","age"=>14,"sex"=>"男"),
    //      array("name"=>"张三","age"=>14,"sex"=>"男")
    //     )
    //    );
      
      
    //    foreach ($h51701 as $key => $value) {
    //     echo "{$key}<br><br>";
    //     foreach ($value as $key1 => $value1) {
    //      echo "第".($key1+1)."个同学<br>";
    //      foreach ($value1 as $key2 => $value2) {
    //       echo "{$key2}==>{$value2}<br>";
    //      }
    //      echo "<br>";
    //     }
    //     echo "------------------------<br>";
    //    }
?>