const convertInput = document.querySelector('.convert-input');
const convertBtn = document.querySelector('.convert');
const encryptBtn = document.querySelector('.encrypt');
const decryptBtn = document.querySelector('.decrypt');
const copyBtn = document.querySelector('.copy');
const expBox = document.querySelector('.expression');
const resultBox = document.querySelector('.result-msg');
let clickable = true;

function startConvert(type) {
    const inputText = convertInput.value.trim();

    if (inputText) {
        const { result } = new MagicExpression(inputText, type);

        expBox.innerText = result;
        resultBox.innerText =
            type === 'data'
                ? `"${inputText}"`
                : type === 'decrypt'
                ? result
                : inputText;
    }
    convertInput.value = '';
}

// 数据转换
convertBtn.onclick = function () {
    startConvert('data');
};
// js 加密
encryptBtn.onclick = function () {
    startConvert('encrypt');
};
// js 解密
decryptBtn.onclick = function () {
    startConvert('decrypt');
};

// 选中并复制代码
copyBtn.onclick = function () {
    if (clickable) {
        clickable = false;
        const that = this;
        const tmp = that.innerText;
        const range = document.createRange();
        const sel = getSelection();

        range.selectNode(expBox);
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand('copy');
        that.innerText = '复制成功！';
        setTimeout(function () {
            that.innerText = tmp;
            sel.removeRange(range);
            clickable = true;
        }, 2000);
    }
};
