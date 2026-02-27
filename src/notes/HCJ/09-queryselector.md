---
title: 获取和操作 DOM 元素
icon: terminal
order: 9
tag: [JavaScript]
---

# 获取和操作 DOM 元素

DOM（Document Object Model，文档对象模型）是浏览器把 HTML 转换成的树状结构，JS 通过它来读取和修改页面内容。

## document.querySelector()

根据 CSS 选择器找到**第一个**匹配的元素：

```js
// 语法
const 元素 = document.querySelector("CSS选择器");
```

选择器规则和 CSS **完全相同**：

```js
// id 选择器（# 号）
const app = document.querySelector("#app");
const input = document.querySelector("#todoInput");
const btn = document.querySelector("#addBtn");

// class 选择器（点号）
const firstItem = document.querySelector(".todo-item");

// 标签选择器
const h1 = document.querySelector("h1");
const ul = document.querySelector("ul");

// 组合选择器
const doneItem = document.querySelector(".todo-item.done");  // 同时有两个 class
const btnInForm = document.querySelector(".input-area button"); // 找 .input-area 里的 button
```

找不到时返回 `null`，可以用来判断元素是否存在：

```js
const el = document.querySelector("#nonexistent");
console.log(el); // null

if (el !== null) {
  el.textContent = "找到了";
}
```

## document.querySelectorAll()

找到**所有**匹配的元素，返回一个列表（NodeList）：

```js
// 找到所有 todo-item 元素
const items = document.querySelectorAll(".todo-item");
console.log(items.length);  // 有多少个

// 遍历所有元素
items.forEach(function(item) {
  console.log(item.textContent);
});
```

`querySelector` vs `querySelectorAll` 对比：

| 方法 | 返回 | 找不到时 |
|------|------|---------|
| `querySelector` | 第一个匹配元素 | `null` |
| `querySelectorAll` | 所有匹配元素的列表 | 空列表（length = 0） |

## element.value：读写输入框的值

```js
const input = document.querySelector("#todoInput");

// 读取：获取用户输入的内容
const text = input.value;
console.log(text);  // 用户输入的文字

// 写入：程序设置输入框内容
input.value = "默认内容";

// 清空输入框（最常用）
input.value = "";
```

完整示例：

```js
const input = document.querySelector("#todoInput");
const btn = document.querySelector("#addBtn");

// 点击按钮时，读取输入框内容
btn.addEventListener("click", function() {
  const text = input.value;
  console.log("用户输入了：", text);

  // 添加后清空输入框
  input.value = "";
});
```

## element.textContent：读写文字内容

```js
const h1 = document.querySelector("h1");

// 读取：获取元素的文字
console.log(h1.textContent);  // "我的待办清单"

// 写入：修改元素的文字
h1.textContent = "Todo List";

// 用变量赋值
const count = 5;
const countEl = document.querySelector("#count");
countEl.textContent = `共 ${count} 项待办`;
```

`textContent` vs `innerHTML`：

| 属性 | 说明 | 安全性 |
|------|------|--------|
| `textContent` | 只处理纯文字，HTML 标签会被当作文字 | 安全（不会执行 HTML） |
| `innerHTML` | 可以插入 HTML 代码 | 需要注意 XSS 风险 |

```js
const li = document.querySelector("li");

// textContent 设置纯文字（推荐）
li.textContent = "学习 <b>HTML</b>";
// 页面显示：学习 <b>HTML</b>（标签原样显示）

// innerHTML 可以渲染 HTML（谨慎使用）
li.innerHTML = "学习 <b>HTML</b>";
// 页面显示：学习 HTML（HTML 加粗生效）
```

## 其他常用 DOM 属性

```js
const el = document.querySelector(".todo-item");

// classList：操作元素的 class
el.classList.add("done");       // 添加 class
el.classList.remove("done");    // 删除 class
el.classList.toggle("done");    // 有就删，没有就加
el.classList.contains("done");  // 是否含有该 class，返回 true/false

// style：直接修改行内样式（不推荐，优先用 classList）
el.style.color = "red";
el.style.display = "none";  // 隐藏元素

// 获取/设置属性
el.getAttribute("data-id");
el.setAttribute("data-id", "123");
```

## 在 Todo List 中的用法

```js
// 获取页面上的关键元素（放在 JS 文件顶部）
const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

// 读取输入框的值
const text = input.value.trim();

// 清空输入框
input.value = "";

// 修改标题
const title = document.querySelector("h1");
title.textContent = `我的待办清单（${todos.length} 项）`;
```

## 小结

- `document.querySelector("选择器")`：找第一个匹配元素，找不到返回 `null`
- `document.querySelectorAll("选择器")`：找所有匹配元素，返回列表
- 选择器规则和 CSS 完全相同：`#id`、`.class`、标签名
- `element.value`：读写 `input` 输入框的当前值
- `element.textContent`：读写元素的纯文字内容
- `element.classList.add/remove/toggle/contains`：操作 class
