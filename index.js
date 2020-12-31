let obj = {}

/**
 * @params 1.目标字符串
 *         2.要保留的位数
 * 返回值是处理后的字符串
 * **/
obj.cutLongString = (string, number) => {
    let newString = ''
    if (string.length > number) {
        return newString = string.substring(0, number) + '...'
    } else {
        return newString
    }
}

/**
 * @params 要劫持进粘贴板的字符串
 * 绑定在指定元素的点击事件上
 * **/
obj.copyTextToClipboard = (value) => {
    var textArea = document.createElement("textarea");
    textArea.style.background = 'transparent';
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
    } catch (err) {}
    document.body.removeChild(textArea);
}

module.exports = obj