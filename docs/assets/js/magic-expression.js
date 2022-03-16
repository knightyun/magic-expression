/**
 * 主函数
 * @param {string} str - 要转换的字符串
 * @param {boolean} isJs - 是否为js加密
 * @returns {string}
 */
function magicExpression(str, isJs = false) {
    // const charUniCodes = []; // 保存每个字符的 Unicode 符

    // 构造 "[]['constructor']['constructor']('return '+'"'+'\\uxxxx'+'"')()" 字符串
    const _constructor =
        toExp('c') + '+' +
        toExp('o') + '+' +
        toExp('n') + '+' +
        toExp('s') + '+' +
        toExp('t') + '+' +
        toExp('r') + '+' +
        toExp('u') + '+' +
        toExp('c') + '+' +
        toExp('t') + '+' +
        toExp('o') + '+' +
        toExp('r');

    const _return =
        toExp('r') + '+' +
        toExp('e') + '+' +
        toExp('t') + '+' +
        toExp('u') + '+' +
        toExp('r') + '+' +
        toExp('n') + '+' +
        toExp(' ');

    const resultBody = str.split('').map(function(s) { return toExp(s); });

    const result = '[][' + _constructor + '][' + _constructor + '](' + _return + '+\'"\'+' + resultBody.join('+') + '+\'"\')()';
    const encryptedJs = '[][' + _constructor + '][' + _constructor + '](' + result + ')()';

    return isJs ? encryptedJs : result;
}

/**
 * 十六进制数字字符转换为 Unicode 符格式
 * @param {string} hexCode 
 * @returns {string}
 */
function toUnicode(hexCode) {
    switch (hexCode.length) {
        case 4:
            break;
        case 3:
            hexCode = '0' + hexCode;
            break;
        case 2:
            hexCode = '00' + hexCode;
            break;
        case 1:
            hexCode = '000' + hexCode;
            break;
    }
    return '\\u' + hexCode;
}

/**
 * 单个字符转换
 * @param {string} char 
 * @returns {string}
 */
function toExp(char) {
    // 已知的表达式映射 - 待完善
    const charExps = {
        ' ': '([]+{})[!![]+!![]+!![]+!![]+!![]+!![]+!![]]',
        '\\': '([]+/\\\\/)[+!![]]',
        '0': '[]+(+[])',
        '1': '[]+(+!![])',
        '2': '[]+(!![]+!![])',
        '3': '[]+(!![]+!![]+!![])',
        '4': '[]+(!![]+!![]+!![]+!![])',
        '5': '[]+(!![]+!![]+!![]+!![]+!![])',
        '6': '[]+(!![]+!![]+!![]+!![]+!![]+!![])',
        '7': '[]+(!![]+!![]+!![]+!![]+!![]+!![]+!![])',
        '8': '[]+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])',
        '9': '[]+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])',
        'a': '([]+![])[+!![]]',
        'b': '([]+{})[!![]+!![]]',
        'c': '([]+{})[!![]+!![]+!![]+!![]+!![]]',
        'd': '([]+[][+[]])[!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]]',
        'e': '([]+!![])[!![]+!![]+!![]]',
        'f': '([]+![])[+[]]',
        'n': '([]+[][+[]])[+!![]]',
        'o': '([]+{})[+!![]]',
        'r': '([]+!![])[+!![]]',
        's': '([]+![])[!![]+!![]+!![]]',
        't': '([]+!![])[+[]]',
        'u': '([]+!![])[!![]+!![]]'
    };

    if (charExps[char]) return charExps[char];

    const hexNum = char.charCodeAt(0).toString(16);
    const hex = toUnicode(hexNum);

    return hex.split('').map(function(x) {
        return toExp(x);
    }).join('+');
}