$(function() {
    // 1. 全选 全不选功能模块
    // 就是把全选按钮（checkall）的状态赋值给 三个小的按钮（j-checkbox）就可以了
    // 事件可以使用change
    $(".checkall").change(function() {
        // console.log($(this).prop("checked"));
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));

        if($(this).prop("checked")) {
            // 全选按钮被选中 给所有商品添加 check-cart-item 类名
            $(".cart-item").addClass("check-cart-item");
        } else {
            // 全选按钮不被选中 给所有商品取消 check-cart-item 类名
            $(".cart-item").removeClass("check-cart-item");
        }
    });
    // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
    $(".j-checkbox").change(function() {
        // if(被选中的小的复选框的个数 === 3) {
        //     就要选中全选按钮
        // } else {
        //     不要选中全选按钮
        // }
        // console.log($(".j-checkbox:checked").length);
        // $(".j-checkbox").length 这个是所有的小复选框的个数
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }

        if($(this).prop("checked")) {
            // 当前小按钮被选中时 给该商品添加check-cart-item 类名
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            // 当前小按钮被没选中时 删除该商品check-cart-item 类名
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });

    // 3.增减商品数量模块 首先声明一个变量 当我们点击+号(increment)，就让这个值++ 然后赋值给文本框
    $(".increment").click(function() {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        // 计算小计模块 根据文本框的值(n) 乘以 当前商品价格(p) 就是 商品的小计
        var p = $(this).parents(".p-num").siblings(".p-price").text();
        // substr截取字符串 去掉符号￥
        p = p.substr(1);
        // toFixed(2) 保留两位小数
        var price = (p * n).toFixed(2);
        // 小计模块
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum(); //用户点击加号修改商品件数时需要件数总计函数
    });
    $(".decrement").click(function() {
        var n = $(this).siblings(".itxt").val();
        if($(this).siblings(".itxt").val() == 1) {
            // 碰到return后面的的代码就不会再执行了
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        var p = $(this).parents(".p-num").siblings(".p-price").text();
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
        getSum(); //用户点击减号修改商品件数时需要件数总计函数
    });
    // 4.用户修改文本框的值 计算 小计模块
    $(".itxt").change(function() {
        // 先得到当前文本框的值 乘以 当前商品的价格
        var n = $(this).val();
        // 若用户输入的值小于0 则终止程序
        if(n < 0) {
            return false;
        }
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        var price = (n * p).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum(); //用户修改商品件数时需要件数总计函数
    });

    // 5。计算总计和总额模块 (封装一个getSum函数)
    getSum(); //页面一打开就先调用一次
    function getSum() {
        var count = 0; //计算总件数
        var money = 0; //计算总金额
        $(".itxt").each(function(i, ele) {
            // 总件数count 等于 遍历每一个input中的数值相加
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);

        $(".p-sum").each(function(i, ele) {
            // 先$(ele).text()把值取过来 然后substr() 去掉￥符号 再转换成浮点型数(因为是金额)
            money += parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    }

    // 6.删除商品模块
    // (1)商品后面的删除按钮
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove();
        getSum();
    });
    // (2)删除选中的商品
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    // (3)清空购物车 删除全部商品
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    });
});