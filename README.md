# 魔法表达式(magic-expression)转换

> **尝试在线转换**：[*点我在线转换*](https://knightyun.github.io/magic-expression/)

通过不一样的表达式，来输出你想要的结果，例如你想要输出字符串：`"hi"`，那么你将会得到以下表达式：
```js
[][([]+{})[!![]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([]+[][+[]])[+!![]]+([]+![])[!![]+!![]+!![]]+([]+!![])[+[]]+([]+!![])[+!![]]+([]+!![])[!![]+!![]]+([]+{})[!![]+!![]+!![]+!![]+!![]]+([]+!![])[+[]]+([]+{})[+!![]]+([]+!![])[+!![]]][([]+{})[!![]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([]+[][+[]])[+!![]]+([]+![])[!![]+!![]+!![]]+([]+!![])[+[]]+([]+!![])[+!![]]+([]+!![])[!![]+!![]]+([]+{})[!![]+!![]+!![]+!![]+!![]]+([]+!![])[+[]]+([]+{})[+!![]]+([]+!![])[+!![]]](([]+!![])[+!![]]+([]+!![])[!![]+!![]+!![]]+([]+!![])[+[]]+([]+!![])[!![]+!![]]+([]+!![])[+!![]]+([]+[][+[]])[+!![]]+([]+{})[!![]+!![]+!![]+!![]+!![]+!![]+!![]]+'"'+([]+/\\/)[+!![]]+([]+!![])[!![]+!![]]+[]+(+[])+[]+(+[])+[]+(!![]+!![]+!![]+!![]+!![]+!![])+[]+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+([]+/\\/)[+!![]]+([]+!![])[!![]+!![]]+[]+(+[])+[]+(+[])+[]+(!![]+!![]+!![]+!![]+!![]+!![])+[]+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+'"')()
```

复制它粘贴到浏览器控制台（console）即可得到预期输出结果；

或者在代码中使用：
```js
var str =
[][([]+{})[!![]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([]+[][+[]])[+!![]]+([]+![])[!![]+!![]+!![]]+([]+!![])[+[]]+([]+!![])[+!![]]+([]+!![])[!![]+!![]]+([]+{})[!![]+!![]+!![]+!![]+!![]]+([]+!![])[+[]]+([]+{})[+!![]]+([]+!![])[+!![]]][([]+{})[!![]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([]+[][+[]])[+!![]]+([]+![])[!![]+!![]+!![]]+([]+!![])[+[]]+([]+!![])[+!![]]+([]+!![])[!![]+!![]]+([]+{})[!![]+!![]+!![]+!![]+!![]]+([]+!![])[+[]]+([]+{})[+!![]]+([]+!![])[+!![]]](([]+!![])[+!![]]+([]+!![])[!![]+!![]+!![]]+([]+!![])[+[]]+([]+!![])[!![]+!![]]+([]+!![])[+!![]]+([]+[][+[]])[+!![]]+([]+{})[!![]+!![]+!![]+!![]+!![]+!![]+!![]]+'"'+([]+/\\/)[+!![]]+([]+!![])[!![]+!![]]+[]+(+[])+[]+(+[])+[]+(!![]+!![]+!![]+!![]+!![]+!![])+[]+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+([]+/\\/)[+!![]]+([]+!![])[!![]+!![]]+[]+(+[])+[]+(+[])+[]+(!![]+!![]+!![]+!![]+!![]+!![])+[]+(!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![]+!![])+'"')();

console.log(str);
// "hi"
```
