---
title: localStorage 数据持久化
icon: database
order: 13
tag: [JavaScript]
---

# localStorage 数据持久化

刷新页面后，页面上的所有 JS 变量都会重置为初始值，待办事项就消失了。`localStorage` 让数据**保存在浏览器本地**，刷新后也能恢复。

## localStorage 基本操作

`localStorage` 是浏览器内置的键值存储，像一个字典：

```js
// setItem：存储数据（键，值）
localStorage.setItem("userName", "张三");
localStorage.setItem("theme", "dark");

// getItem：读取数据（返回字符串，不存在时返回 null）
const name = localStorage.getItem("userName");
console.log(name);  // "张三"

const missing = localStorage.getItem("notExist");
console.log(missing);  // null

// removeItem：删除某一项
localStorage.removeItem("theme");

// clear：清除所有数据（慎用）
localStorage.clear();
```

## 只能存字符串

`localStorage` 只能存储**字符串**，存其他类型会被自动转成字符串（常常出错）：

```js
// 错误示例：直接存数组
const todos = [{text: "学习", done: false}];
localStorage.setItem("todos", todos);
// 存进去的是：[object Object]（错误！）

// 读出来也是字符串，不是数组
const saved = localStorage.getItem("todos");
console.log(saved);  // "[object Object]"（毫无用处）
```

必须用 `JSON.stringify` 和 `JSON.parse` 转换：

### JSON.stringify：把 JS 数据转成字符串

```js
const todos = [
  { text: "学习 HTML", done: true },
  { text: "学习 CSS", done: false },
];

// 转成 JSON 字符串
const jsonStr = JSON.stringify(todos);
console.log(jsonStr);
// '[{"text":"学习 HTML","done":true},{"text":"学习 CSS","done":false}]'
// （就是一段 JSON 格式的字符串）

// 存入 localStorage
localStorage.setItem("todos", jsonStr);
```

### JSON.parse：把字符串解析回 JS 数据

```js
// 从 localStorage 读出字符串
const jsonStr = localStorage.getItem("todos");

// 解析回 JS 数组
const todos = JSON.parse(jsonStr);
console.log(todos);
// [{text: "学习 HTML", done: true}, {text: "学习 CSS", done: false}]

// 现在可以正常操作数组
console.log(todos.length);  // 2
console.log(todos[0].text); // "学习 HTML"
```

## || 运算符（逻辑或）

`||` 在这里有一个妙用——提供默认值：

```js
// 语法：A || B
// 如果 A 是"真值"（non-falsy），返回 A
// 如果 A 是"假值"（falsy），返回 B

// 用来处理 null 的情况
const saved = localStorage.getItem("todos");  // 可能是 null
const jsonStr = saved || "[]";
// 如果 saved 是 null（假值），用 "[]" 代替

// 组合使用
const todos = JSON.parse(localStorage.getItem("todos") || "[]");
// 如果 localStorage 里没有 todos，getItem 返回 null
// null || "[]" → "[]"
// JSON.parse("[]") → []（空数组）
// 所以首次运行时，todos = []
```

"假值"（falsy）包括：`null`、`undefined`、`""`（空字符串）、`0`、`false`。

## ! 取反

`!` 把布尔值取反：

```js
!true      // false
!false     // true

const isDone = false;
!isDone    // true

// 用于条件判断
if (!text) {
  // text 为空、null、0 等假值时执行
  return;
}
```

## 对象 {} 的概念和用法

对象是**键值对的集合**，用来描述一件事物的多个属性：

```js
// 创建对象
const todo = {
  text: "学习 JavaScript",
  done: false,
};

// 读取属性（点语法）
console.log(todo.text);  // "学习 JavaScript"
console.log(todo.done);  // false

// 修改属性
todo.done = true;
console.log(todo.done);  // true

// 添加新属性
todo.createdAt = "2024-01-15";

// 对象数组：最常用的数据结构
const todos = [
  { text: "学习 HTML", done: true },
  { text: "学习 CSS", done: false },
  { text: "学习 JS", done: false },
];

// 访问数组里的对象
console.log(todos[0].text);  // "学习 HTML"
console.log(todos[1].done);  // false
```

## forEach 遍历数组

```js
const todos = [
  { text: "学习 HTML", done: true },
  { text: "学习 CSS", done: false },
];

// forEach：对数组每个元素执行一次函数
todos.forEach(function(todo) {
  console.log(todo.text, todo.done);
});
// 输出：
// 学习 HTML true
// 学习 CSS false

// 箭头函数写法（更简洁）
todos.forEach((todo) => {
  console.log(todo.text);
});
```

## array.push()：添加元素到数组末尾

```js
const todos = [];

todos.push({ text: "学习 HTML", done: false });
todos.push({ text: "学习 CSS", done: false });

console.log(todos.length);  // 2
console.log(todos[0].text); // "学习 HTML"
```

## innerHTML 清空内容

```js
const ul = document.querySelector("#todoList");

// 清空 ul 里面的所有内容
ul.innerHTML = "";

// 然后重新渲染所有条目
todos.forEach((todo) => {
  const li = createTodoElement(todo);
  ul.appendChild(li);
});
```

## 完整数据流设计

整个应用围绕 `todos` 数组运转：

```
todos 数组（内存中的数据）
    ↓ save()              ↑ 初始化时读取
localStorage（持久存储）   ↑
    ↑ 加载时读取          |
                          |
render()（根据数组重绘页面）

数据流：
用户操作 → 修改 todos 数组 → save() → render()
```

## 完整实现代码

```js
// 获取元素
const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

// 从 localStorage 加载，或初始化为空数组
let todos = JSON.parse(localStorage.getItem("todos") || "[]");

// 保存到 localStorage
function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 根据 todos 数组重新渲染页面
function render() {
  // 清空现有内容
  todoList.innerHTML = "";

  // 遍历 todos，为每个对象创建 li
  todos.forEach(function(todo, index) {
    const li = document.createElement("li");
    li.className = "todo-item" + (todo.done ? " done" : "");

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "×";
    deleteBtn.dataset.index = index;  // 记录序号，方便删除

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// 添加待办
function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  todos.push({ text: text, done: false });  // 修改数组
  save();    // 保存到 localStorage
  render();  // 重新渲染页面

  input.value = "";
  input.focus();
}

// 事件：点击列表
todoList.addEventListener("click", function(event) {
  const target = event.target;

  if (target.classList.contains("delete-btn")) {
    // 删除：从数组中移除
    const index = parseInt(target.dataset.index);
    todos.splice(index, 1);
  } else {
    // 切换完成状态
    const li = target.closest("li");
    const items = todoList.querySelectorAll("li");
    const index = Array.from(items).indexOf(li);
    todos[index].done = !todos[index].done;  // 取反
  }

  save();
  render();
});

// 事件：点击按钮
addBtn.addEventListener("click", addTodo);

// 事件：回车
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") addTodo();
});

// 首次加载时渲染
render();
```

## 小结

- `localStorage.setItem/getItem/removeItem`：存储/读取/删除键值对
- 只能存字符串：存数组/对象用 `JSON.stringify`，读出来用 `JSON.parse`
- `||` 提供默认值：`JSON.parse(localStorage.getItem("key") || "[]")`
- `!` 取反：`!false → true`，`!todo.done` 切换完成状态
- `forEach`：遍历数组，对每个元素执行函数
- `array.push()`：往数组末尾添加元素
- 对象 `{}`：键值对集合，描述一个待办的 `text` 和 `done` 状态
- `innerHTML = ""`：清空元素所有子内容
- 数据流：修改 `todos` 数组 → `save()` 持久化 → `render()` 重绘界面
