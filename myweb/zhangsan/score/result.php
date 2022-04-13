<!-- 根据学生考号查询数据库，得到数据之后返回成绩 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>学生成绩查询结果</title>
    <style>
        ul {
            list-style: none;
            color: red;
        }
        .title {
            font-size: 20px;
        }
    </style>
</head>
<body>

<!-- 后台工程师PHP部分 -->
<?php
    //准备模拟数据 注意的是 按道理数据应该是从数据库获取的，这里简单定义一个二维数组 来处理
    $data = array();
    // 设定学号分别为123 456 789
    $data["123"] = array("name"=>"张三", "chinese"=>"120", "math"=>"89", "English"=>"66");
    $data["456"] = array("name"=>"李四", "chinese"=>"90", "math"=>"120", "English"=>"120");
    $data["789"] = array("name"=>"王五", "chinese"=>"110", "math"=>"100", "English"=>"30");
    
    $code = $_POST["code"];
    
?>
<?php
        // array 数组 key索引  exists存在
    if(array_key_exists($code, $data)) {
        // 查询数据库(先用二维数组模拟)
        $result = $data[$code]; //只有当数组当中有$code这个下标索引时 才能通过下标索引拿到对应的成绩数据
?>
    <div>
        <div class="title"><?php echo $result["name"]?>成绩如下</div>
        <ul>
            <li>语文：<?php echo $result["chinese"]?></li>
            <li>数学：<?php echo $result["math"]?></li>
            <li>英语：<?php echo $result["English"]?></li>
        </ul>
    </div>
    <?php
        } else {
    ?>  <div>该学生考号不存在</div>
    <?php } ?>
</body>
</html>