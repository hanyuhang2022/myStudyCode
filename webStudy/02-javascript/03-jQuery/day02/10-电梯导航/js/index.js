$(function() {
    // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择添加current
    // 节流阀 互斥锁
    var flag = true;
    var toolTop = $(".recommend").offset().top;
    // 页面加载完先调用封装好地函数 防止刷新丢失电梯导航
    ToogleTool();

    function ToogleTool() {
        if($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        }else {
            $(".fixedtool").fadeOut();
        }
    }

    $(window).scroll(function() {
        // 页面滚动调用该函数
        ToogleTool();

        // 3.页面滚动到某个区域 左侧电梯导航小li相应添加和删除 current类名
        if(flag) { //点击完小 li 页面已滚动到了目标位置，animate()中的flag = true，这是才执行滚动页面给li添加current类
            $(".floor .w").each(function(i, ele) { //遍历每一个商品大模块
                // 如果页面卷去地头部大于 遍历到该模块距离页面顶部距离 
                if($(document).scrollTop() >= $(ele).offset().top) {
                    console.log(i);
                    // 因为商品大模块索引号一一对应电器导航小li的索引 则让电梯导航里的该小li添加current 兄弟小里删除类明明current
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            });
        }
    });

    // 2.点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function() {
        flag = false;
        console.log($(this).index());
        // 当我们每次点击小li 就需要计算出页面要去往的位置
        // 选出相应索引号的内容区的盒子 计算它的offset().top
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面滚动效果
        $("body,html").stop().animate({
            // 点击会电梯导航的li 会触发页面滚动 然后触发 3中(each()遍历那部分代码)
            // 如果点击第一个 li 再点最后一个li each()遍历 就会给电梯导航的li挨个添加current类的背景颜色
            scrollTop: current
        }, function() {
            // 点击完小 li 后页面滚动到了目标位置，然后利用animate()中的回调函数把锁打开
            flag = true;
        });

        // 点击之后 让当前的小li 添加current类名，兄弟移除
        $(this).addClass("current").siblings().removeClass();
    });
    
});