<?php 
	// 限制网速 5秒以后再显示
	sleep(5);
	$username = $_GET["uname"];

	if($username == 'zhangsan') {
		echo "error";
	} else {
		echo "ok";
	}

 ?>