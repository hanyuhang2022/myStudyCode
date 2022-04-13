window.addEventListener('load', function() {
    var lbox = document.querySelector('.preview_img'); 
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 鼠标经过小盒子显示黄色遮罩层mask 和 大图片 big
    lbox.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    });
    // 鼠标离开小盒子隐藏黄色遮罩层mask 和 大图片 big
    lbox.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    });
    // 2.鼠标移动的时候，让黄色的盒子跟着鼠标来走
    lbox.addEventListener('mousemove', move);
    function move(e) {
        // (1)先计算出鼠标在盒子内的坐标
        var x = e.pageX- this.offsetLeft;
        var y = e.pageY- this.offsetTop;
        // (2)减去盒子高度 300是一半 是150 就是我们mask 的最终 left 和top值了
        // (3)我们mask 移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight /2;
        // (4)如果x坐标小于0了就让他停在0的位置
        // mask的最大移动距离
        var Maxmask = lbox.offsetWidth - mask.offsetWidth;
        if(maskX < 0) {
            maskX = 0;
        } else if(maskX > Maxmask) {
            maskX = Maxmask;
        }
        if(maskY < 0) {
            maskY = 0;
        } else if(maskY > Maxmask) {
            maskY = Maxmask;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 3.大图片的移动距离 = 遮挡层移动距离 * 大图片移动距离 / 遮挡层的最大移动距离
        // 大图
        var bigIMG = document.querySelector('.bigimg');
        // 大图片的最大移动距离
        var bigMax = bigIMG.offsetWidth - big.offsetWidth;
        // 大图片的移动距离 X Y
        var bigX = maskX * bigMax / Maxmask;
        var bigY = maskY * bigMax / Maxmask;
        bigIMG.style.left = -bigX + 'px';
        bigIMG.style.top = -bigY + 'px';
    }
    


});