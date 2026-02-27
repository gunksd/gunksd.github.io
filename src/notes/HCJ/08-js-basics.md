---
title: JavaScript 基础入门
icon: terminal
order: 8
tag: [JavaScript]
---

# JavaScript 基础入门

JavaScript（简称 JS）让网页从静态变成**动态**——响应用户操作、修改页面内容、存储数据。

## script 标签放在 `</body>` 前

JS 代码写在 `<script>` 标签里，推荐放在 `</body>` 结束标签**之前**：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Todo List</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="app">
      <!-- 页面内容 -->
    </div>

    <!-- script 放在 body 末尾，确保 HTML 已经加载完毕 -->
    <script src="app.js"></script>
  </body>
</html>
```

为什么要放在底部？

浏览器从上到下读取 HTML。如果 `<script>` 在 `<head>` 里，JS 会在页面元素加载前执行，导致 `document.querySelector` 找不到任何元素。放在底部可以保证 HTML 元素已经存在，JS 可以正常操作它们。

## 注释

```js
// 这是单行注释，// 后面的内容不执行

/*
  这是多行注释
  可以跨越多行
  常用于函数说明
*/

const x = 10; // 行尾注释
```

## const vs let

声明变量的两个关键字：

```js
// const：常量，声明后不能重新赋值
const appName = "My Todo List";
const maxItems = 100;

// appName = "Other"; // 错误！const 不能重新赋值

// let：变量，可以重新赋值
let count = 0;
count = count + 1;  // 可以
count = 5;          // 可以
```

| 关键字 | 能否重新赋值 | 适用场景 |
|--------|------------|---------|
| `const` | 不能 | 不会变的值（DOM 元素、配置） |
| `let` | 能 | 会变的值（计数器、状态） |

**推荐原则**：默认用 `const`，只有确实需要修改时才用 `let`。这让代码意图更清晰。

```js
// 好的习惯：
const input = document.querySelector("#todoInput");  // DOM 元素不会变
const todoList = document.querySelector("#todoList");

let todos = [];  // 数组内容会变（push/filter 等）
```

注意：`const` 声明的数组/对象，**内容可以改变**，只是不能重新赋值给另一个值：

```js
const arr = [1, 2, 3];
arr.push(4);       // 可以！修改了数组内容
arr = [1, 2, 3, 4]; // 错误！不能重新赋值
```

## 数据类型

JS 中最常用的三种基本数据类型：

### 字符串（String）

用单引号、双引号或反引号包裹的文字：

```js
const name = "张三";
const greeting = '你好';
const template = `欢迎，${name}！`;  // 模板字符串，可嵌入变量

// 常用字符串操作
const text = "  Hello World  ";
text.trim()         // "Hello World"  去掉首尾空格
text.length         // 15             字符串长度
text.includes("Hello")  // true       是否包含
text.toUpperCase()  // "  HELLO WORLD  "
```

### 数字（Number）

整数和小数统一用 number 类型：

```js
const count = 42;
const price = 9.99;
const result = count + 1;   // 43
const total = count * price; // 419.58
```

### 布尔值（Boolean）

只有两个值：`true` 或 `false`：

```js
const isDone = false;
const isLoggedIn = true;

// 布尔值常用于条件判断
if (isDone) {
  console.log("已完成");
}
```

## console.log：调试工具

`console.log()` 把信息打印到浏览器**开发者工具的控制台**：

```js
console.log("Hello");         // 输出字符串
console.log(42);              // 输出数字
console.log(true);            // 输出布尔值
console.log([1, 2, 3]);       // 输出数组
```

打开控制台：浏览器中按 `F12`（或右键 → 检查），点击 `Console` 标签。

## 变量名 vs 字符串字面量

这是初学者**最容易混淆**的地方：

```js
const x = "苹果";

console.log(x);    // 输出变量 x 的值：苹果
console.log("x");  // 输出字符串字面量："x"（就是字母 x）

const todoInput = document.querySelector("#todoInput");
console.log(todoInput);        // 输出 DOM 元素对象
console.log("todoInput");      // 输出字符串 "todoInput"
```

规则：
- **有引号** → 字符串字面量，原样输出引号里的内容
- **无引号** → 变量名，输出这个变量存储的值

```js
// 常见错误
let name = "李四";
console.log("name");  // 错误：输出的是 "name" 这串字母，不是 "李四"
console.log(name);    // 正确：输出 "李四"
```

## 完整示例：JS 基础演示

```js
// 1. 变量声明
const appTitle = "Todo List";
let itemCount = 0;
const isReady = true;

// 2. console.log 调试
console.log(appTitle);    // "Todo List"
console.log(itemCount);   // 0
console.log(isReady);     // true

// 3. 字符串操作
const userInput = "   学习 JavaScript  ";
console.log(userInput.trim());       // "学习 JavaScript"
console.log(userInput.trim().length); // 10

// 4. 变量 vs 字符串字面量
const msg = "你好";
console.log(msg);     // 你好（变量的值）
console.log("msg");   // msg（字符串字面量）

// 5. 布尔值判断
const inputValue = userInput.trim();
if (inputValue !== "") {
  console.log("输入不为空，可以添加");
  itemCount = itemCount + 1;
  console.log("当前数量：", itemCount);
}
```

## 小结

- `<script src="app.js">` 放在 `</body>` 前，确保 HTML 已加载
- `//` 单行注释，`/* */` 多行注释
- `const`：不能重新赋值；`let`：可以重新赋值；默认用 `const`
- 数据类型：字符串（引号包裹）、数字、布尔值（true/false）
- `console.log()` 打印到控制台，是最实用的调试工具
- 有引号是字符串字面量，无引号是变量名——两者输出完全不同
