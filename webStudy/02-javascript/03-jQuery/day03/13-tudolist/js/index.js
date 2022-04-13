$(function() {
    load();
    $("#title").on("keydown", function(e) {
        if(e.keyCode === 13) {
            var local = getDate();
            local.push({title: $(this).val(), done: false});
            saveDate(local);
            load();
            $(this).val("");
        }
    });

    $("ol, ul").on("click", "a", function() {
        var data = getDate();
        var index = $(this).attr("id");
        data.splice(index, 1);
        saveDate(data);
        load();
    });

    $("ul, ol").on("click", "input", function() {
        var data = getDate();
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        saveDate(data);
        load();
    }) 

    function getDate() {
        var data = localStorage.getItem("todolists");
        if(data != null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    function saveDate(data){
        localStorage.setItem("todolists", JSON.stringify(data));
    }

    function load() {
        var data = getDate();
        $("ol, ul").empty();
        var todocount = 0;
        var donecount = 0;
        $.each(data, function(i, ele) {
            if(ele.done) {
                var li = $("<li><input type='checkbox' checked> <p>"+ele.title+"</p> <a href='javascript:;' id="+ i +"></a> </li>");
            $("ul").prepend(li);
            donecount++;    
            } else {
                var li = $("<li><input type='checkbox'> <p>"+ele.title+"</p> <a href='javascript:;' id="+ i +"></a> </li>");
            $("ol").prepend(li);
            
            todocount++;
            }
        });
        $("#todocount").text(todocount);
        $("#donecount").text(donecount);
    }

});