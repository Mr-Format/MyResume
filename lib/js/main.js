function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

// 在指定元素中添加类
function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

// 获取指定元素的样式
function getStyle(obj, name) {
    // 正常浏览器的方式:
    // return getComputedStyle(obj,null)[name];
    // IE8的方式:
    // return obj.currentStyle[name];
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
}

function hasClass(obj, cn) {
    // 判断obj中是否含有cn
    // 创建一个正则
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
};

// 定义一个函数,用来向一个元素中添加指定的class属性值
/* 
    参数:
        obj:要添加class属性的元素
        cn:要添加的class值
*/
function addClass(obj, cn) {
    // 检查obj中是否有cn
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
};

/* 删除一个元素中的指定class*/
function removeClass(obj, cn) {
    // 创建正则
    var reg = new RegExp("\\b" + cn + "\\b");
    // 删除cn
    obj.className = obj.className.replace(reg, "");
}

/* toggleClass可以用来切换一个类
    如果元素中有该类,则删除
    如果元素中没有该类,则添加
*/
function toggleClass(obj, cn) {
    // 判断obj中是否有cn
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
}

/* move函数 */
function move(obj, attr, speed, target, time, callback) {
    clearInterval(obj.timer);
    if (oldValue > target) {
        speed = -speed;
    }
    obj.timer = setInterval(function() {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        if ((speed > 0 && newValue >= target) || (speed < 0 && newValue <= target)) {
            newValue = target;
        }
        obj.style[attr] = newValue + 'px';
        if (newValue == target) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, time)
}

function backTop() {
    let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    that.scrollTop = scrollTop;
    let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = that.scrollTop + ispeed;
        document.body.scrollTop = that.scrollTop + ispeed;
        that.scrollTop = that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
            clearInterval(timer);
        }
    }, 16)
}