let input = document.querySelector('.input');
let convertBtn = document.querySelector('.convert');
let copyBtn = document.querySelector('.copy');
let exp = document.querySelector('.expression');
let result = document.querySelector('.result-msg');

// 开始转换
convertBtn.onclick = function() {
    let inputText = input.value.trim();

    if (inputText) {
        exp.innerText = magicExpression(inputText);
        result.innerText = '"' + inputText + '"';
    }
    input.value = '';
}
// 选中并复制代码
copyBtn.onclick = function() {
    let that = this;
    let tmp = that.innerText;
    let range = document.createRange();
    let sel = getSelection();

    range.selectNode(exp);
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('copy');
    that.innerText = '复制成功！';
    setTimeout(function() {
        that.innerText = tmp;
        sel.removeRange(range);
    }, 2000);
}