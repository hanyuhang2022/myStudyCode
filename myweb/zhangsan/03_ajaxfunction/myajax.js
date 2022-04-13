function myAjax2(obj) {
    var defaults =  {
        type: "get",
        url: "#",
        dataType: "json",
        data: {},
        success: function(result) {console.log(result);},
        async: true
    };
    for(var key in obj){
		defaults[key] = obj[key];
	}

    var xhr = null;
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    }
    var params = "";
    for(var attr in defaults.data){
        params += attr + "=" + defaults.data[attr] + "&";
    }
    if(params) {
        params += params.substring(0, params.length - 1);
    }
    if(defaults.type == "get") {
        defaults.url += "?" + params;
    }
    // 2.
    xhr.open(defaults.type, defaults.url,defaults.async);
    //3.
	if(defaults.type == "get") {
		xhr.send(null);
	} else if(defaults.type == "post") {
	    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(params);
	}
    // 4.
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