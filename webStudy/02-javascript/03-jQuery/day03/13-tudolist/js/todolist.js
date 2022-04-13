$(function() {  
        // 每次页面加载 把数据自动渲染到页面
        load();
        // (1)按下回车把完整数据 存储到本地存储里面(给扁担绑定键盘按下的事件)
        // 存储数据的格式  var todolist = [{title: "xxx", done: false}];
        $("#title").on("keydown", function(e) {
            // 判断是否按下了回车键
            if(e.keyCode === 13) {
                if($(this).val() === "") {
                   alert("请输入您要的操作"); 
                } else {
                    // 先读取本地存储原来的数据
                var local = getDate();
                // console.log(local);
                // 把local数组进行更新数据 把最新的数据追加给local数组
                local.push({title: $(this).val(), done: false});
                // 把这个数组local 存处给本地存储
                saveDate(local); //local是局部变量，当实参传递给saveDate中的形参data
            
            // 2.todolist 本地存储数据渲染加载到页面
            load();
            // 按下回车保存数据且数据渲染到页面后输入框的值为空
            $("#title").val("");
                }
            }
        });
    
        // 3.todolist 删除操作
        $("ol, ul").on("click", "a", function() {
            // alert(1);
            // 先获取本地存储
            var data = getDate();
            // 修改数据(点击当前的a对应的属性) 
            var index = $(this).attr("id"); //attr() 获取自定义属性id
                // 删除本地数据中 点击的小a对应的数组元素
            data.splice(index, 1);
            // 保存到本地存储
            saveDate(data);
            // 把删除处理后的数据渲染到页面
            load();
        });
    
        // 4.todolist 正在进行的已完成选项操作
        $("ul ,ol").on("click", "input", function() {
            var data = getDate();
            var index = $(this).siblings("a").attr("id");
            data[index].done = $(this).prop("checked");
            saveDate(data);
            load();
        });
    
    
    
        // 读取本地存储的数据
        function getDate() {
            var data = localStorage.getItem("todolist");
            if(data != null) {
                // 本地存储里面数据是字符串格式的 但我们需要的是对象形式的
                return JSON.parse(data);
            } else {
                // 返回一个空数组
                return [];
            }
        }
        // 保存本地存储
        function saveDate(data) {
            // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
            localStorage.setItem("todolist", JSON.stringify(data));
        }
    
        //渲染加载数据
        function load() {
            // 先读取本地数据
            var data = getDate();
            // 遍历之前要先清空里面的元素内容(因为页面加载调用load()以后再存入数据会出两次)
            $("ol, ul").empty();
            // 遍历这个数据
            var todocount = 0; //正在进行的个数
            var donecount = 0; //已经完成的个数
            $.each(data, function(i, ele) {
                // console.log(ele);
                if(ele.done) {
                    $("ul").prepend($("<li><input type='checkbox' checked> <p>"+ ele.title +"</p> <a href='javascript:;' id="+ i +"></a></li>"));
                    donecount++
                } else {
                    $("ol").prepend($("<li><input type='checkbox'> <p>"+ ele.title +"</p> <a href='javascript:;' id="+ i +"></a></li>"));
                    todocount++
                }
            });
            $("#todocount").text(todocount);
            $("#donecount").text(donecount);
        }
});