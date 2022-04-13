window.addEventListener('load', function() {
    // 1.获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    // 获得focus的宽度
    var w = focus.offsetWidth;
    var ol = focus.children[1];
    // 2.利用定时器自动播放图片
    var index = 0;
    var timer = setInterval(function() {
        index++;
        var tranlateX = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX('+ tranlateX +'px)';
    }, 2000);
    // 等着我们过渡完成(滚动完)之后，再去判断 监听过渡完成的事件 transitionend
    ul.addEventListener('transitionend', function() {
        // 无缝滚动
        if(index >= 3) {
            index = 0;
            // 去掉过渡效果 这样我们的ul 快速的跳到目标位置
            ul.style.transition = 'none';
            // 利用最新的索引号乘以宽度
            var tranlateX = -index * w;
            ul.style.transform = 'translateX('+ tranlateX +'px)';
        }else if(index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translateX = -index * w;
            ul.style.transform = 'translateX(' + translateX + 'px)';
        }
        // 3.小圆点跟随变化
        // 把ol里面的小li带有current类名的选出来去掉类名current
        ol.querySelector('.current').classList.remove('current');
        // 让当前索引号 的小li 加上 current add
        ol.children[index].classList.add('current');
    });
    // 4.手指滑动轮播图、
    // 触摸元素 touchstart 获取手指初始坐标
    var startX = 0;
    var moveX = 0; //后面我们会使用这个移动距离所以要定义一个全局变量
    var flag = false;
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        // 手指触摸的时候就停止定时器
        clearInterval(timer);
    });
    // 移动手指 touchmove：计算手指的滑动距离，并且移动盒子
    ul.addEventListener('touchmove', function(e) {
        // 计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子：盒子原来的位置 + 手指移动的距离
        var translateX = -index * w + moveX;
        // 手指拖动的时候，不需要动画效果所以取消过渡效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translateX + 'px)';
        flag = true;  //如果用户手指移动过我们再去判断否则不做判断效果
        e.preventDefault();  //阻止滚动屏幕的行为
    });

    // 手指离开 根据移动距离去判断 是回弹还是播放上一张下一张
    ul.addEventListener('touchend', function() {
        if(flag) {
            // moveX 需要取绝对值 因为左滑moveX是正值，右划是负值
        if(Math.abs(moveX) > 70) {
            if(moveX > 0) {
                // 右划是负值播放下一张图片
                index--;
            } else {
                // 左划是正值播放上一张图片
                index++;
            }
        }
        var translateX = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translate('+ translateX +'px)';
        }
        // 手指离开的时候重启定时器
        clearInterval(timer); //开启之前先清除一下,可以保证当前页面只有一个定时器运行
        timer = setInterval(function() {
        index++;
        var tranlateX = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX('+ tranlateX +'px)';
    }, 2000);
    });
    // 返回顶部模块制作
    var goBack = document.querySelector('.goBack');
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if(window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        }else{
            goBack.style.display = 'none';
        }
    });
    goBack.addEventListener('click', function() {
        window.scroll(0, 0);
    });
});