window.addEventListener('load', function() {
    // 1.获取元素
    var focus = this.document.querySelector('.focus');
    var arrow_l = this.document.querySelector('.arrow_l');
    var arrow_r = this.document.querySelector('.arrow_r');
    var focusWidth = focus.offsetWidth;
    // 2.鼠标经过focus 显示和隐藏左右按钮
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; //清除定时器变量
    });
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            arrow_r.click();
        }, 2000);
    });
    // 3.动态生成小圆圈 有几张图片就生成几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    for(var i = 0; i < ul.children.length; i++) {
        //创建一个小li
        var li = this.document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index', i);
        // 把小li插入到ol里面
        ol.appendChild(li);
        // 4. 小圆圈的排他思想 我们可以直接生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function() {
            for(var i = 0; i < ol.children.length; i++) {
                // 干掉所有人 把所有的小li清除 current类名
                ol.children[i].className = '';
            }
            // 留下我自己 当前的小li设置 current类名
            this.className = 'current';
            // 5.点击小圆圈,移动图片 当然移动的是 ul
            // ul的移动距离 小圆圈的索引号 乘以 图片 宽度 注意是负值
            // 当我们点击了某个小li 就拿到当前小li的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li 就要把这个小li 的索引号给num
            num = index;
            // 当我们点击了某个小li 就要把这个小li 的索引号给circle
            circle = index;
            animate(ul, -index * focusWidth);
        });
    }
    ol.children[0].className = 'current';
    // 6. 克隆第一张图片
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 7. 点击右侧按钮,图片滚动一张
    var num = 0;
    var circle = 0;
    // 设置节流阀
    var flag = true;
   arrow_r.addEventListener('click', function() {
       if (flag) {
        //    关闭水龙头
           flag = false;
        if (num == ul.children.length - 1) {
            num = 0;
               ul.style.left = 0 + 'px';
               
           }
            num++;
            animate(ul, -num * focusWidth, function() { //利用回调函数 动画执行完毕打开水龙头
                flag = true;
            });
            // 8.点击右侧按钮,小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle++;
            // 如果 circle == 4 说明走到最后我们克隆的这张图片了
            if (circle == ol.children.length) {
                circle = 0;
            }
            // for(var i = 0; i < ol.children.length; i++) {
            //     ol.children[i].className = '';
            // }
            // ol.children[circle].className = 'current';
            // 调用函数
            circleChange();
       }
   });
    // 9.点击左侧按钮
    arrow_l.addEventListener('click', function() {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + 'px';
        } 
         num--;
         animate(ul, -num * focusWidth);
         // 点击右侧按钮,小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
         circle--;
         // 如果 circle == 4 说明走到最后我们克隆的这张图片了
        //  if (circle < 0) {
        //      circle = ol.children.length - 1;
        //  }
        circle = circle < 0 ? ol.children.length - 1 : circle; 
        //  调用函数
         circleChange();
    });    
    function circleChange() {
        for(var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }

    // 10.自动播放轮播图
    var timer = setInterval(function() {
        // 手动调用点击事件
        arrow_r.click();
    }, 2000);
});