// 封装ajax函数
function myAjax(type, url, params, dataType, callback, async) {
    // 1.创建xhr对象
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 2.准备发送
    if (type == "get") {
        // 若不传递params(参数为空) 则 null --> ?null（地址后边跟的是null）
        if (params && params != "") { // 所以当参数参在且不为空时
            url += "?" + params;
        }
    }
    xhr.open(type, url, async);
    // 3.执行发送
    if (type == "get") {
        xhr.send(null);
    } else if (type == "post") {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
    // 4.xhr 回调
    if (async) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var result = null;
                    if (dataType == "json") {
                        result = xhr.responseText;
                        result = JSON.parse(result);
                    } else if (dataType == "xml") {
                        result = xhr.responseXML;
                    } else {
                        result = xhr.responseText;
                    }
                    // 把结果通知给调用ajax函数的人
                    if (callback) { //确保callback方法存在
                        callback(result);
                    }
                }
            }
        }
    } else {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var result = null;
                if (dataType == "json") {
                    result = xhr.responseText;
                    result = JSON.parse(result);
                } else if (dataType == "xml") {
                    result = xhr.responseXML;
                } else {
                    result = xhr.responseText;
                }
                // 把结果通知给调用ajax函数的人
                if (callback) { //确保callback方法存在
                    callback(result);
                }
            }
        }
    }
}

// 解决参数顺序不可变的问题(利用对象传递参数)
obj = {
	url:"xxx",
	type:"post",
	dataType:"json",
	data:{
		uname:"zhangsan",
		age:"18"
	},//  uname=zhangsan&age=18
	success:function(){}
};



function myAjax2(obj) {
// 解决参数没有默认值每次都得传递的问题（设置一个默认值）
// 相当于预定义了一个传递类型，特自己定义了就用它自己的 没有定义就用这个
	var defaults = {
		type:"get",
		url:"#",
		dataType:"json",
		data:{},
		async:true,
		success:function(result){console.log(result);}
	};

	//obj中的属性，覆盖到defaults中的属性
	//1、如果有一些属性只存在obj中，会给defaults中增加属性
	//2、如果有一些属性在obj和defaults中都存在，会将defaults中的默认值覆盖
	//3、如果有一些属性只在defaults中存在，在obj中不存在，这时候defaults中将保留预定义的默认值
	for(var key in obj){
		defaults[key] = obj[key];
	}

	var xhr = null;
	if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//得到params(利用遍历data对象得到)
	// data:{
	// 	uname:"zhangsan",
	// 	age:"18"
	// }//  uname=zhangsan&age=18
	var params = ""; //先把参数定义成空字符串才能相加
	for(var attr in defaults.data){
        //attr是参数名
		params += attr + "=" + defaults.data[attr] + "&";
	}
	if(params) { //得到params参数后最后会有一个&
        // 去掉最后的&
		params = params.substring(0,params.length - 1);
	}
	if(defaults.type == "get") {
		defaults.url += "?" + params;
	}
	xhr.open(defaults.type,defaults.url,defaults.async);

	if(defaults.type == "get") {
		xhr.send(null);
	} else if(defaults.type == "post") {
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(params);
	}

	if(defaults.async) {
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4) {
				if(xhr.status == 200) {
					var result = null;
					if(defaults.dataType == "json") {
						result = xhr.responseText;
						result = JSON.parse(result);
					} else if(defaults.dataType == "xml") {
						result = xhr.responseXML;
					} else {
						result = xhr.responseText;
					}
					defaults.success(result);
					
				}
			}
		};
	} else {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				var result = null;
				if(defaults.dataType == "json") {
					result = xhr.responseText;
					result = JSON.parse(result);
				} else if(defaults.dataType == "xml") {
					result = xhr.responseXML;
				} else {
					result = xhr.responseText;
				}
				defaults.success(result);
				
			}
		}
	}

	

}