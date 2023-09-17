/**
 * @file JS 混淆、加/解密算法. (https://github.com/knightyun/magic-expression)
 * @copyright 2019 knightyun. <https://github.com/knightyun/magic-expression/raw/master/docs/assets/js/magic-expression.js>
 * @license MIT License. <https://raw.githubusercontent.com/knightyun/magic-expression/master/LICENSE>
 */

/**
 * JS 混淆、加/解密算法
 * @class MagicExpression
 */
class MagicExpression {
    /** @type {string} - 转换结果 */
    result = '';

    _constructor = '';
    _return = '';

    /**
     * @constructor
     * @param {string} str - 要转换的字符串
     * @param {boolean} type - 转换的类型, data | encrypt | decrypt
     * @memberof MagicExpression
     */
    constructor(str, type) {
        if (!str || !type) return;
        // const charUniCodes = []; // 保存每个字符的 Unicode 符

        // 构造 "[]['constructor']['constructor']('return '+'"'+'\\uxxxx'+'"')()" 这样的字符串
        this._constructor = 'constructor'
            .split('')
            .map((s) => this.toExp(s))
            .join('+');

        this._return = 'return'
            .split('')
            .map((s) => this.toExp(s))
            .join('+');

        switch (type) {
            case 'data':
                this.result = this.dataTransfer(str);
                break;
            case 'encrypt':
                this.result = this.encryptJs(str);
                break;
            case 'decrypt':
                this.result = this.decryptJs(str);
                break;
            default:
                break;
        }
    }

    /**
     * 数据转换
     * @param {string} str - 要转换的字符串
     * @returns {string}
     */
    dataTransfer(str) {
        const { _constructor, _return } = this;
        const resultBody = str
            .replace(/\\/g, '\\\\') // 处理转义符 '\' 的问题
            .split('')
            .map((s) => this.toExp(s))
            .join('+');

        return `[][${_constructor}][${_constructor}](${_return}+'\"'+${resultBody}+'\"')()`;
    }

    /**
     * JS 加密
     * @param {string} str - 要加密的 js
     * @returns {string}
     */
    encryptJs(str) {
        const { _constructor } = this;
        const data = this.dataTransfer(str);
        return `[][${_constructor}][${_constructor}](${data})()`;
    }

    /**
     * JS 解密
     * @param {string} str - 要解密的代码
     * @returns {string}
     */
    decryptJs(str) {
        const { _constructor } = this;
        const prefix = `[][${_constructor}][${_constructor}](`
            .split('')
            .map((s) => '\\' + s)
            .join('');
        const suffix = `\\)\\(\\)`;
        const reg = new RegExp(`(^${prefix})|(${suffix}$)`, 'g');

        return eval(str.replace(reg, ''));
    }

    /**
     * 十六进制数字字符转换为 Unicode 符格式
     * @param {string} hexCode
     * @returns {string}
     * @memberof MagicExpression
     */
    toUnicode(hexCode) {
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
     * @memberof MagicExpression
     */
    toExp(char) {
        // 已知的表达式映射 - 待完善
        const charExps = {
            ' ': '([]+{})[!![]+!![]+!![]+!![]+!![]+!![]+!![]]',
            '\\': '([]+/\\\\/)[+!![]]',
            0: '[]+(+[])',
            1: '[]+(+!![])',
            2: '[]+(!![]+!![])',
            3: '[]+(!![]+!![]+!![])',
            4: '[]+(!![]+!![]+!![]+!![])',
            5: '[]+(!![]+!![]+!![]+!![]+!![])',
            6: '[]+(!![]+!![]+!![]+!![]+!![]+!![])',
            7: '[]+(!![]+!![]+!![]+!![]+!![]+!![]+!![])',
            8: '[]+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])',
            9: '[]+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])',
            a: '([]+![])[+!![]]',
            b: '([]+{})[!![]+!![]]',
            c: '([]+{})[!![]+!![]+!![]+!![]+!![]]',
            d: '([]+[][+[]])[!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]]',
            e: '([]+!![])[!![]+!![]+!![]]',
            f: '([]+![])[+[]]',
            n: '([]+[][+[]])[+!![]]',
            o: '([]+{})[+!![]]',
            r: '([]+!![])[+!![]]',
            s: '([]+![])[!![]+!![]+!![]]',
            t: '([]+!![])[+[]]',
            u: '([]+!![])[!![]+!![]]',
        };

        if (charExps[char]) return charExps[char];

        const hexNum = char.charCodeAt(0).toString(16);
        const hex = this.toUnicode(hexNum);

        return hex
            .split('')
            .map((x) => this.toExp(x))
            .join('+');
    }
}
