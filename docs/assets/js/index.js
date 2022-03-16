const convertInput = document.querySelector('.convert-input');
const convertBtn = document.querySelector('.convert');
const encryptBtn = document.querySelector('.encrypt');
const copyBtn = document.querySelector('.copy');
const exp = document.querySelector('.expression');
const result = document.querySelector('.result-msg');
let clickable = true;

function startConvert(isJs = false) {
    const inputText = convertInput.value.trim();

    if (inputText) {
        exp.innerText = magicExpression(inputText, isJs);
        result.innerText = '"' + inputText + '"';
    }
    convertInput.value = '';
}

// 开始转换
convertBtn.onclick = function() { startConvert(); };
encryptBtn.onclick = function() { startConvert(true); };

// 选中并复制代码
copyBtn.onclick = function() {
    if (clickable) {
        clickable = false;
        const that = this;
        const tmp = that.innerText;
        const range = document.createRange();
        const sel = getSelection();
    
        range.selectNode(exp);
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand('copy');
        that.innerText = '复制成功！';
        setTimeout(function() {
            that.innerText = tmp;
            sel.removeRange(range);
            clickable = true;
        }, 2000);
    }
}