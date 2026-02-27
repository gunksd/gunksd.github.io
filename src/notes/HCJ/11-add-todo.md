---
title: 动态添加待办事项
icon: terminal
order: 11
tag: [JavaScript]
---

# 动态添加待办事项

本课实现 Todo List 的核心功能：用 JS 动态创建 HTML 元素并插入页面。

## document.createElement()

用 JS 创建一个新的 HTML 元素（此时还在内存里，还没有显示在页面上）：

```js
// 创建一个 li 元素
const li = document.createElement("li");

// 创建其他元素
const span = document.createElement("span");
const button = document.createElement("button");
const div = document.createElement("div");
```

## element.appendChild()

把元素**插入到父元素的末尾**，这时才会出现在页面上：

```js
const ul = document.querySelector("#todoList");
const li = document.createElement("li");

li.textContent = "学习 JavaScript";

// 把 li 插入到 ul 里面
ul.appendChild(li);

// 现在页面上会显示这个 li
```

如果需要插入到特定位置：

```js
// 插入到末尾（最常用）
parent.appendChild(newEl);

// 插入到某个元素之前
parent.insertBefore(newEl, referenceEl);

// 更现代的写法
parent.append(newEl);      // 末尾
parent.prepend(newEl);     // 开头
```

## if 判断语法

只有条件成立时才执行代码：

```js
// 基本 if
if (条件) {
  // 条件为 true 时执行
}

// if...else
if (条件) {
  // true 时执行
} else {
  // false 时执行
}

// if...else if...else
if (条件1) {
  // 条件1 为 true
} else if (条件2) {
  // 条件2 为 true
} else {
  // 都不满足
}
```

实际例子：

```js
const text = input.value.trim();

if (text === "") {
  console.log("输入不能为空");
  return;  // 提前退出函数，不执行后续代码
}

// 到这里说明 text 不为空
createTodoItem(text);
```

## === 严格相等 vs == 宽松相等

```js
// === 严格相等：值和类型都必须相同（推荐使用）
"" === ""      // true
"0" === 0      // false（类型不同：字符串 vs 数字）
0 === false    // false（类型不同：数字 vs 布尔）
null === null  // true

// == 宽松相等：会自动类型转换（容易出错，不推荐）
"0" == 0       // true（字符串被转成数字）
0 == false     // true（false 被转成 0）
null == undefined // true（特殊规则）
```

**始终使用 `===`**，避免类型转换带来的意外结果。

## .trim()：去掉首尾空格

```js
const text = "   学习 JavaScript   ";

text.trim()         // "学习 JavaScript"（去掉两端空格）
text.trimStart()    // "学习 JavaScript   "（只去掉开头）
text.trimEnd()      // "   学习 JavaScript"（只去掉结尾）

// 为什么需要 trim？
// 用户可能误输入 "  " 全空格，trim 后变成 ""，就能判断为空
const input = "   ";
input === ""         // false！（有空格）
input.trim() === ""  // true（trim 后是空字符串）
```

## 完整的添加待办流程

```
用户在输入框输入文字
         ↓
点击"添加"按钮 或 按下 Enter
         ↓
读取 input.value 并 .trim()
         ↓
判断是否为空字符串？
    ↙          ↘
  是（""）      否（有内容）
  ↓              ↓
 return         创建 li 元素（createElement）
（不执行）       ↓
               设置 li 的内容（textContent）
               ↓
               设置 li 的 class（classList.add）
               ↓
               插入到列表（appendChild）
               ↓
               清空输入框（input.value = ""）
```

## 完整代码实现

```js
// 获取页面元素
const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

// 创建并添加一个待办项
function addTodo() {
  // 1. 读取并清理输入
  const text = input.value.trim();

  // 2. 校验：空内容不添加
  if (text === "") {
    return;  // 提前退出
  }

  // 3. 创建 li 元素
  const li = document.createElement("li");
  li.className = "todo-item";

  // 4. 创建文字 span
  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  // 5. 创建删除按钮
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "×";

  // 6. 组装：把子元素加入 li
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // 7. 把 li 插入列表
  todoList.appendChild(li);

  // 8. 清空输入框
  input.value = "";

  // 9. 让输入框重新获得焦点
  input.focus();
}

// 点击按钮添加
addBtn.addEventListener("click", function() {
  addTodo();
});

// 按回车添加
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
```

## 创建复杂结构的 li

最终每个 `li` 的 HTML 结构如下：

```html
<li class="todo-item">
  <input type="checkbox" class="todo-check" />
  <span class="todo-text">学习 JavaScript</span>
  <button class="delete-btn">×</button>
</li>
```

对应的 JS 创建代码：

```js
function createTodoElement(text) {
  const li = document.createElement("li");
  li.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-check";

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "×";

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;  // 返回组装好的 li，由调用者决定插入位置
}

// 使用
function addTodo() {
  const text = input.value.trim();
  if (text === "") return;

  const li = createTodoElement(text);
  todoList.appendChild(li);
  input.value = "";
}
```

## 小结

- `document.createElement("标签名")`：在内存中创建元素
- `父元素.appendChild(子元素)`：把元素插入页面
- `if (条件) { ... }` 判断是否执行代码
- 始终用 `===` 严格相等，不用 `==`
- `.trim()` 去掉首尾空格，然后判断是否为空
- 良好习惯：把创建元素的逻辑封装成函数，便于复用
