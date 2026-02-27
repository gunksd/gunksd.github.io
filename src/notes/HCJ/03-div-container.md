---
title: div 容器与 id/class
icon: layer-group
order: 3
tag: [HTML]
---

# div 容器与 id/class

## div 是什么

`<div>`（division，区块）是一个**透明的盒子**，本身没有任何外观，专门用来**组织和包裹**其他元素：

```html
<!-- div 本身不显示任何东西 -->
<div>
  <h1>标题</h1>
  <p>内容</p>
  <button>按钮</button>
</div>
```

`div` 的价值在于：
1. **分组**：把相关元素包在一起
2. **定位**：用 CSS 控制整组元素的位置和样式
3. **布局**：用 flexbox 等布局方式排列子元素

## id 属性：唯一名字

`id` 是元素的**唯一标识符**，整个页面里每个 id 值只能出现一次：

```html
<div id="app">
  <input id="todoInput" type="text" />
  <button id="addBtn">添加</button>
  <ul id="todoList"></ul>
</div>
```

id 的用途：

- **CSS 选择**：用 `#id名` 选中该元素
- **JS 获取**：用 `document.getElementById("id名")` 或 `document.querySelector("#id名")`

```css
/* CSS：# 号 + id名 */
#app {
  max-width: 500px;
  margin: 0 auto;
}

#addBtn {
  background-color: #4a90d9;
}
```

```js
// JS：获取 id 为 todoInput 的元素
const input = document.getElementById("todoInput");
const input2 = document.querySelector("#todoInput"); // 效果相同
```

## class 属性：可复用名字

`class` 是**分类标签**，同一个 class 名可以用在多个元素上：

```html
<ul id="todoList">
  <li class="todo-item">学习 HTML</li>
  <li class="todo-item done">学习 CSS</li>   <!-- 两个 class -->
  <li class="todo-item">学习 JavaScript</li>
</ul>
```

class 的用途：

- **CSS 选择**：用 `.class名` 选中所有该 class 的元素
- **JS 操作**：用 `classList.add/remove/toggle` 动态添加/删除 class

```css
/* CSS：点号 + class名 */
.todo-item {
  padding: 8px 16px;
  border-bottom: 1px solid #eee;
}

/* 同时有 done class 的元素 */
.todo-item.done {
  text-decoration: line-through;
  color: #999;
}
```

```js
// JS：给元素添加 done class（标记为完成）
li.classList.add("done");

// 移除 done class（取消完成）
li.classList.remove("done");

// 有就删，没有就加（切换）
li.classList.toggle("done");
```

## id vs class 对比

| 对比项 | id | class |
|--------|-----|-------|
| 唯一性 | 整个页面唯一 | 可以多个元素共用 |
| CSS 选择器 | `#id名` | `.class名` |
| JS 选择器 | `#id名` 或 `getElementById()` | `.class名` |
| 一个元素可以有几个 | 只能有一个 | 可以有多个（空格分隔） |
| 适合场景 | 唯一的重要元素 | 可复用的样式分类 |

## 一个元素可以同时有 id 和 class

```html
<!-- id 和 class 可以同时存在 -->
<li id="item-1" class="todo-item done">
  已完成的第一个任务
</li>

<!-- 多个 class 用空格分隔 -->
<div class="card large highlighted">
  内容
</div>
```

## Todo List 的完整 HTML 结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>Todo List</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- 整个应用的外层容器，id用于JS获取和CSS定位 -->
    <div id="app">
      <h1>我的待办清单</h1>

      <!-- 输入区域：class用于CSS布局 -->
      <div class="input-area">
        <input
          type="text"
          id="todoInput"
          placeholder="添加新任务，按回车或点击添加"
        />
        <button id="addBtn">添加</button>
      </div>

      <!-- 列表容器：JS往这里插入 li -->
      <ul id="todoList"></ul>
    </div>

    <script src="app.js"></script>
  </body>
</html>
```

## 小结

- `<div>` 是透明容器，用来分组和布局，本身不显示
- `id`：唯一名字，CSS 用 `#` 选，JS 用 `getElementById` 或 `querySelector("#...")`
- `class`：可复用标签，CSS 用 `.` 选，JS 用 `classList` 操作
- 一个元素可以同时有 id 和多个 class
- 使用场景：需要唯一指定时用 id，需要复用样式或 JS 动态切换时用 class
