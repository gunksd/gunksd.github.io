---
title: 回车提交与完成切换
icon: terminal
order: 12
tag: [JavaScript]
---

# 回车提交与完成切换

本课实现两个交互功能：按回车键快速添加，以及点击条目切换完成状态。

## keydown 事件 + event 对象

监听键盘事件时，回调函数会收到一个 `event` 对象，包含按键信息：

```js
input.addEventListener("keydown", function(event) {
  // event 包含这次键盘事件的所有信息
  console.log(event.key);   // 按键名：Enter、Backspace、a、ArrowUp 等
  console.log(event.code);  // 物理按键：Enter、KeyA、Digit1 等
  console.log(event.ctrlKey); // 是否同时按了 Ctrl
  console.log(event.shiftKey); // 是否同时按了 Shift
});
```

## event.key 获取按键名

```js
input.addEventListener("keydown", function(event) {
  console.log("按下了：" + event.key);
  // 输出示例：
  // "Enter"     → 回车键
  // "Backspace" → 退格键
  // "a"         → 字母 a（小写）
  // "A"         → Shift+a（大写）
  // "ArrowUp"   → 上方向键
  // " "         → 空格键

  if (event.key === "Enter") {
    addTodo();
  }
});
```

## classList 的三种方法

操作元素 class 的三个核心方法：

```js
const li = document.querySelector(".todo-item");

// add：添加 class（不存在时才添加，已存在不重复添加）
li.classList.add("done");
// <li class="todo-item done">

// remove：删除 class（不存在时什么都不做）
li.classList.remove("done");
// <li class="todo-item">

// toggle：有就删，没有就加（最常用于开关切换）
li.classList.toggle("done");
// 第一次调用 → 加上 done
// 第二次调用 → 删掉 done
// 第三次调用 → 再加上 done

// contains：检查是否有某个 class，返回 true/false
if (li.classList.contains("done")) {
  console.log("已完成");
} else {
  console.log("未完成");
}
```

三种方法对比：

| 方法 | 作用 | 适用场景 |
|------|------|---------|
| `add("x")` | 添加 class x | 明确要设为某状态 |
| `remove("x")` | 删除 class x | 明确要取消某状态 |
| `toggle("x")` | 切换 class x | 开关类交互（完成/未完成） |
| `contains("x")` | 是否有 class x | 判断当前状态 |

## JS + CSS 配合的标准方式

JS 只管 class，CSS 只管样式，**职责分离**：

```css
/* CSS：定义每种状态的样式 */
.todo-text {
  color: #333;
  transition: color 0.2s, text-decoration 0.2s;
}

/* 有 done class 时的样式 */
.todo-item.done .todo-text {
  color: #aaa;
  text-decoration: line-through;
}
```

```js
// JS：只切换 class，不直接操作样式
li.addEventListener("click", function() {
  li.classList.toggle("done");
  // CSS 自动应用对应的样式
});
```

好处：
- **样式改了不用动 JS**：只需修改 CSS 即可
- **逻辑改了不用动 CSS**：只需修改 JS 即可
- **代码清晰**：样式在 CSS 文件里集中管理

## 事件委托：给父元素绑定事件

如果列表项是动态创建的，无法在创建时逐一绑定事件。可以给**父元素**绑定事件，利用事件冒泡来处理：

```js
const todoList = document.querySelector("#todoList");

// 给 ul 绑定事件，处理里面所有 li 的点击
todoList.addEventListener("click", function(event) {
  // event.target 是实际被点击的元素
  const target = event.target;

  // 找到最近的 li 祖先元素
  const li = target.closest("li");

  if (!li) return;  // 如果没找到 li，退出

  // 判断是否点击了删除按钮
  if (target.classList.contains("delete-btn")) {
    li.remove();  // 删除整个 li
  } else {
    // 切换完成状态
    li.classList.toggle("done");
  }
});
```

## 抽函数复用（DRY 原则）

DRY = Don't Repeat Yourself（不要重复自己）。

点击按钮和按回车都要执行"添加"逻辑，如果各写一遍，改一处就要改两处。应该抽成函数：

```js
// 错误示例：重复代码
addBtn.addEventListener("click", function() {
  const text = input.value.trim();
  if (text === "") return;
  const li = createTodoElement(text);
  todoList.appendChild(li);
  input.value = "";
});

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    // 重复了上面的代码！
    const text = input.value.trim();
    if (text === "") return;
    const li = createTodoElement(text);
    todoList.appendChild(li);
    input.value = "";
  }
});

// 正确示例：抽成函数
function addTodo() {
  const text = input.value.trim();
  if (text === "") return;
  const li = createTodoElement(text);
  todoList.appendChild(li);
  input.value = "";
  input.focus();
}

// 两处都调用同一个函数
addBtn.addEventListener("click", addTodo);

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTodo();  // 复用函数
  }
});
```

## 完整的交互代码

```js
const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

// 创建待办 li 元素
function createTodoElement(text) {
  const li = document.createElement("li");
  li.className = "todo-item";

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "×";

  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

// 添加待办（被两个事件共用）
function addTodo() {
  const text = input.value.trim();
  if (text === "") return;

  const li = createTodoElement(text);
  todoList.appendChild(li);

  input.value = "";
  input.focus();
}

// 点击按钮添加
addBtn.addEventListener("click", addTodo);

// 按回车添加
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

// 事件委托：处理列表中的点击（切换完成/删除）
todoList.addEventListener("click", function(event) {
  const li = event.target.closest("li");
  if (!li) return;

  if (event.target.classList.contains("delete-btn")) {
    // 点击删除按钮
    li.remove();
  } else {
    // 点击条目本身：切换完成状态
    li.classList.toggle("done");
  }
});
```

## 小结

- `keydown` 事件 + `event.key` 检测按键：`event.key === "Enter"`
- `classList.toggle("class")`：切换 class，有就删，没有就加
- `classList.add/remove/contains`：明确添加/删除/检查 class
- JS 管 class，CSS 管样式——职责分离，便于维护
- DRY 原则：重复逻辑抽成函数，两处调用同一个函数
- 事件委托：给父元素绑定事件，通过 `event.target` 判断被点击的具体元素
