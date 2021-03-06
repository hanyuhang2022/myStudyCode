function animate(obj, target, callback) {
    // console.log(callback);
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 回调函数写到定时器的里面
            if(callback) {
                // 调用函数
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}