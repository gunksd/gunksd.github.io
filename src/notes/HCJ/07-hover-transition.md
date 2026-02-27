---
title: 悬停效果与过渡动画
icon: mouse-pointer
order: 7
tag: [CSS]
---

# 悬停效果与过渡动画

## :hover 伪类

`:hover` 选中**鼠标悬停时**的元素，实现交互反馈效果：

```css
/* 鼠标悬停在按钮上时改变背景色 */
button {
  background-color: #4a90d9;
  color: white;
}

button:hover {
  background-color: #357abd;  /* 颜色加深 */
}
```

```css
/* 鼠标悬停在列表项上时显示背景 */
.todo-item {
  background-color: transparent;
}

.todo-item:hover {
  background-color: #f5f5f5;
}
```

```css
/* 鼠标悬停时改变透明度 */
.delete-btn {
  opacity: 0;  /* 默认透明（看不见） */
}

.todo-item:hover .delete-btn {
  opacity: 1;  /* 悬停时显示 */
}
```

## :focus 伪类

`:focus` 选中**输入框被激活（点击进入）时**的状态：

```css
/* 默认状态：灰色边框 */
input {
  border: 1px solid #dddddd;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

/* 激活状态：蓝色边框 + 光晕 */
input:focus {
  border-color: #4a90d9;
  box-shadow: 0 0 0 3px rgba(74, 144, 217, 0.2);
}
```

效果：用户点击输入框时，边框变蓝，提示已激活可以输入。

## transition：过渡动画

`transition` 让属性变化时产生**平滑的过渡效果**，而不是瞬间跳变：

```css
/* 语法：transition: 属性名 时长 */
button {
  background-color: #4a90d9;
  transition: background-color 0.2s;  /* 背景色变化用 0.2 秒过渡 */
}

button:hover {
  background-color: #357abd;  /* 不再是瞬间变化，而是平滑过渡 */
}
```

### 常用时长参考

```css
/* 快速反馈（按钮点击等） */
transition: background-color 0.15s;

/* 普通动画 */
transition: all 0.2s;

/* 慢速展开（折叠面板等） */
transition: height 0.3s;
```

### transition 多个属性

```css
/* 方法一：用 all 监听所有属性变化 */
button {
  transition: all 0.2s;
}

/* 方法二：分别指定多个属性（逗号分隔） */
input {
  transition: border-color 0.2s, box-shadow 0.2s;
}
```

### transition 缓动函数（可选）

```css
/* ease（默认）：先快后慢，自然感 */
transition: all 0.2s ease;

/* linear：匀速 */
transition: all 0.2s linear;

/* ease-in：先慢后快 */
transition: all 0.2s ease-in;

/* ease-out：先快后慢 */
transition: all 0.2s ease-out;
```

## JS + CSS 配合：JS 加减 class，CSS 定义样式

这是前端交互的**标准方式**：

- CSS 负责定义**每种状态的样式**
- JS 负责在合适时机**切换 class**
- 二者分工明确，互不干扰

```css
/* CSS 定义两种状态 */
.todo-item {
  color: #333;
  /* 默认：正常颜色 */
}

.todo-item.done {
  color: #999;
  text-decoration: line-through;
  /* 完成状态：灰色 + 删除线 */
}
```

```js
// JS 只负责切换 class，不直接改样式
li.classList.toggle("done");   // 有 done 就删，没有就加

// 等价于：
if (li.classList.contains("done")) {
  li.classList.remove("done");
} else {
  li.classList.add("done");
}
```

效果：
```
点击前: <li class="todo-item">学习 HTML</li>
点击后: <li class="todo-item done">学习 HTML</li>  ← 划线变灰
再点击: <li class="todo-item">学习 HTML</li>  ← 恢复正常
```

## 完整的 Todo Item 样式（含动画）

```css
.todo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
  transition: background-color 0.15s;  /* 悬停背景渐变 */
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-item:hover {
  background-color: #f8f9fa;  /* 悬停时浅灰背景 */
}

/* 完成状态 */
.todo-item.done .todo-text {
  text-decoration: line-through;
  color: #aaaaaa;
  transition: color 0.2s, text-decoration 0.2s;
}

/* 删除按钮：默认隐藏，悬停时显示 */
.delete-btn {
  margin-left: auto;        /* 推到最右边 */
  opacity: 0;               /* 默认不可见 */
  transition: opacity 0.2s; /* 淡入淡出 */
  cursor: pointer;
  color: #e74c3c;
  font-size: 18px;
}

.todo-item:hover .delete-btn {
  opacity: 1;  /* 悬停时显示删除按钮 */
}
```

## 小结

- `:hover`：鼠标悬停时的样式，实现交互反馈
- `:focus`：输入框激活时的样式，提示用户
- `transition: 属性 时长`：属性变化时的平滑过渡
- JS + CSS 配合的标准方式：
  - CSS 定义每种状态的样式
  - JS 通过 `classList.add/remove/toggle` 切换状态
  - 好处：样式和逻辑分离，便于维护
