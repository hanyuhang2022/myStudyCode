<!-- php的变量声明 及使用(无论声明还是使用 都用 加$) -->
<?php
    header("content-type: text/html;charset=utf-8");

    echo "HelloWorld";
    echo "<br>"; //换行

    // 声明变量str
    $str = "hello";
    // 输出变量str
    echo $str;
    echo "<br>";

    // 简单的加法运算
    $num1 = 100;
    $num2 = 200;
    $result = $num1 + $num2;
    echo $result;
    echo "</br>";

    // 字符串的拼接(用. 不用 +)
    $str1 = "hello";
    $str2 = "WORLD";
    // $str3 = $str1 + $str2; 结果为0 因为加号是数字运算
    $str3 = $str1 . $str2;
    echo $str3;
    echo "</br>";
    echo "字符串拼接结果为" . $str3;
    echo "</br>";
?>