---
title: 事件监听 addEventListener
icon: terminal
order: 10
tag: [JavaScript]
---

# 事件监听 addEventListener

事件（Event）是用户与页面交互时发生的事情：点击按钮、输入文字、按下键盘……`addEventListener` 让我们在这些事件发生时执行代码。

## 基本语法

```js
元素.addEventListener("事件名", function() {
  // 事件发生时要执行的代码
});
```

完整示例：

```js
const btn = document.querySelector("#addBtn");

btn.addEventListener("click", function() {
  console.log("按钮被点击了！");
});
```

语法拆解：
- `btn` → 要监听的元素
- `"click"` → 事件名（字符串）
- `function() { ... }` → 回调函数，事件发生时被调用

## 函数的概念

函数是**打包好的代码**，等需要时再执行：

```js
// 函数声明：定义一个函数
function sayHello() {
  console.log("你好！");
  console.log("欢迎来到 Todo List");
}

// 函数调用：立即执行函数
sayHello();  // 执行，打印两行

// 函数表达式：把函数存在变量里
const greet = function() {
  console.log("你好！");
};

greet();  // 调用

// 箭头函数：更简洁的写法（效果相同）
const greet2 = () => {
  console.log("你好！");
};
```

在 `addEventListener` 里，传入的函数叫**回调函数**（callback）：
- 不会立即执行
- 等用户触发事件后，浏览器自动调用它

```js
// 这里传入的 function 不会立即执行
// 只有用户点击按钮时，浏览器才会调用它
btn.addEventListener("click", function() {
  console.log("点击时才执行");
});

console.log("这行会立即执行");  // 这行比点击事件先执行
```

## 常用事件

### click：点击

```js
const btn = document.querySelector("#addBtn");

btn.addEventListener("click", function() {
  const text = document.querySelector("#todoInput").value;
  console.log("要添加：", text);
});
```

### input：输入框内容变化

每当用户在输入框输入/删除字符时触发：

```js
const input = document.querySelector("#todoInput");

input.addEventListener("input", function() {
  const value = input.value;
  console.log("当前输入：", value);

  // 实时字数统计
  const counter = document.querySelector("#charCount");
  counter.textContent = `${value.length} 字`;
});
```

`input` 事件 vs `change` 事件：
- `input`：每输入一个字符立即触发
- `change`：失焦（点击到输入框外面）且内容有变化时触发

### keydown：键盘按键

用户按下键盘上的任何键时触发：

```js
const input = document.querySelector("#todoInput");

input.addEventListener("keydown", function(event) {
  // event 对象包含按键信息
  console.log("按下了：", event.key);

  // 检测是否按了 Enter
  if (event.key === "Enter") {
    console.log("用户按了回车");
    // 执行添加逻辑
  }
});
```

## event 对象

回调函数可以接收一个 `event` 参数，包含事件的详细信息：

```js
btn.addEventListener("click", function(event) {
  console.log(event.type);   // "click"（事件类型）
  console.log(event.target); // 被点击的元素
});

input.addEventListener("keydown", function(event) {
  console.log(event.key);    // 按下的键名，如 "Enter"、"a"、"Backspace"
  console.log(event.code);   // 物理按键代码，如 "Enter"、"KeyA"
});
```

## 常用事件汇总

| 事件名 | 触发时机 | 常用于 |
|--------|---------|--------|
| `click` | 鼠标点击 | 按钮、列表项 |
| `input` | 输入框内容变化 | 实时搜索、字数统计 |
| `keydown` | 键盘按下 | 回车提交 |
| `keyup` | 键盘抬起 | 同上 |
| `change` | 选择框/复选框变化 | 下拉菜单、checkbox |
| `focus` | 元素获得焦点 | 输入框激活 |
| `blur` | 元素失去焦点 | 输入框失活 |
| `mouseover` | 鼠标移入 | 悬停效果（CSS:hover 更常用） |
| `submit` | 表单提交 | 表单验证 |

## 移除事件监听

```js
// 先把函数存在变量里
function handleClick() {
  console.log("点击");
}

btn.addEventListener("click", handleClick);

// 需要移除时
btn.removeEventListener("click", handleClick);
// 注意：必须是同一个函数引用才能移除
```

## Todo List 中的事件监听

```js
const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

// 点击"添加"按钮
addBtn.addEventListener("click", function() {
  addTodo();
});

// 在输入框按回车
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

// 点击列表项（切换完成状态）
todoList.addEventListener("click", function(event) {
  const li = event.target.closest("li");
  if (li) {
    li.classList.toggle("done");
  }
});

function addTodo() {
  const text = input.value.trim();
  if (text !== "") {
    // 创建新待办项...
    input.value = "";
  }
}
```

## 小结

- `元素.addEventListener("事件名", function() {})`：监听事件
- 回调函数不立即执行，等事件触发时浏览器调用
- 常用事件：`click`（点击）、`input`（输入变化）、`keydown`（键盘）
- `event` 对象包含事件详情：`event.key` 获取按键名
- 函数是打包好的代码，可以复用，避免重复写相同逻辑
