---
title: CSS 基础语法
icon: brush
order: 4
tag: [CSS]
---

# CSS 基础语法

CSS（Cascading Style Sheets，层叠样式表）负责控制页面的**外观**：颜色、大小、布局、字体……

## CSS 语法结构

```css
选择器 {
  属性名: 属性值;
  属性名: 属性值;
}
```

每条规则由三部分组成：
- **选择器**：选中哪些元素
- **属性名**：要改变什么
- **属性值**：改成什么样子
- 每条声明以分号 `;` 结尾

```css
/* 示例：让所有 h1 变成蓝色，字号 32px */
h1 {
  color: blue;
  font-size: 32px;
}
```

## 三种基本选择器

### 1. 标签选择器（直接写标签名）

选中页面上**所有**该标签的元素：

```css
/* 所有 p 标签变成灰色 */
p {
  color: #666666;
}

/* 所有 button 的背景变蓝 */
button {
  background-color: #4a90d9;
}

/* 所有 li 去掉默认的圆点 */
li {
  list-style: none;
}
```

### 2. id 选择器（# 号）

选中**唯一一个** id 匹配的元素：

```css
/* id 为 app 的元素 */
#app {
  max-width: 500px;
  margin: 0 auto;
}

/* id 为 addBtn 的按钮 */
#addBtn {
  background-color: #4a90d9;
  color: white;
}
```

### 3. class 选择器（. 号）

选中**所有**该 class 的元素：

```css
/* 所有 class 含 todo-item 的元素 */
.todo-item {
  padding: 8px 16px;
  border-bottom: 1px solid #eeeeee;
}

/* 所有 class 含 done 的元素 */
.done {
  text-decoration: line-through;
  color: #999999;
}
```

## 如何连接 CSS 文件

在 HTML 的 `<head>` 里用 `<link>` 标签引入：

```html
<head>
  <meta charset="UTF-8" />
  <title>Todo List</title>
  <!-- rel 固定写 stylesheet，href 是 CSS 文件路径 -->
  <link rel="stylesheet" href="style.css" />
</head>
```

文件结构：
```
my-project/
  index.html   ← 引入 style.css
  style.css    ← 样式文件
  app.js       ← JavaScript 文件
```

## 常用 CSS 属性

### 文字相关

```css
.example {
  color: #333333;          /* 文字颜色 */
  font-size: 16px;         /* 字号，px = 像素 */
  font-family: "微软雅黑", sans-serif; /* 字体，多个备选用逗号分隔 */
  font-weight: bold;       /* 字重：normal 正常 / bold 加粗 */
  text-decoration: none;   /* 文字装饰：none 去掉下划线 / line-through 删除线 */
  text-align: center;      /* 文字水平对齐：left / center / right */
}
```

### 尺寸相关

```css
.box {
  width: 500px;       /* 宽度 */
  height: 60px;       /* 高度 */
  max-width: 600px;   /* 最大宽度（超过不再变宽） */
  min-height: 40px;   /* 最小高度 */
}
```

### 背景相关

```css
.box {
  background-color: #f5f5f5;  /* 背景颜色 */
  background-color: white;    /* 颜色名也可以 */
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色 */
}
```

### 内外边距

```css
.box {
  padding: 16px;           /* 内边距（内容到边框的距离）四个方向相同 */
  padding: 8px 16px;       /* 上下8px，左右16px */
  padding: 4px 8px 4px 8px; /* 上 右 下 左（顺时针） */

  margin: 20px;            /* 外边距（元素到外部的距离）四个方向相同 */
  margin: 0 auto;          /* 上下0，左右auto → 水平居中！ */
}
```

## margin: auto 水平居中技巧

这是 CSS 中**最常用的水平居中技巧**：

```css
#app {
  width: 500px;      /* 必须设置宽度 */
  margin: 0 auto;    /* 左右外边距自动均分 → 水平居中 */
}
```

效果图：
```
|←────────── 浏览器宽度 ────────────→|
|   auto    |←── 500px ──→|   auto   |
            ↑ 自动均分左右空间
```

注意：`margin: auto` 只对**块级元素**有效，且元素**必须有明确的宽度**。

## CSS 注释

```css
/* 这是 CSS 注释 */
/* 可以解释代码的作用，不影响样式 */

#app {
  /* max-width: 600px; */ /* 临时注释掉某条规则 */
  max-width: 500px;
}
```

## Todo List 基础样式示例

```css
/* 全局重置：消除浏览器默认样式差异 */
* {
  box-sizing: border-box; /* 让 padding 不撑大元素 */
  margin: 0;
  padding: 0;
}

body {
  font-family: "PingFang SC", "微软雅黑", sans-serif;
  background-color: #f0f2f5;
  color: #333333;
}

#app {
  width: 480px;
  margin: 40px auto;   /* 上下40px，左右居中 */
  background-color: white;
  padding: 24px;
}

h1 {
  font-size: 24px;
  color: #222222;
  margin-bottom: 20px;
}
```

## 小结

- CSS 语法：`选择器 { 属性: 值; }`
- 三种选择器：标签选择器、`#id`、`.class`
- `<link rel="stylesheet" href="style.css">` 引入样式文件
- 常用属性：`color`、`background-color`、`font-size`、`font-family`、`width`、`padding`、`margin`
- `margin: 0 auto` 配合固定宽度实现水平居中
