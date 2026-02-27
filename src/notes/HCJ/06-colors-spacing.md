---
title: 颜色、盒模型与边框
icon: palette
order: 6
tag: [CSS]
---

# 颜色、盒模型与边框

## 颜色三种写法

### 1. 颜色名

英文颜色名，浏览器直接识别：

```css
color: red;
color: blue;
color: white;
color: black;
color: gray;
color: transparent;  /* 完全透明 */
```

适合简单场景，但颜色有限且不精确。

### 2. 十六进制 #RRGGBB

最常用的写法，由红(R)、绿(G)、蓝(B) 三个 16 进制数字组成：

```css
color: #333333;         /* 深灰色 */
color: #ffffff;         /* 纯白 */
color: #000000;         /* 纯黑 */
color: #4a90d9;         /* 蓝色 */
color: #e74c3c;         /* 红色 */
color: #2ecc71;         /* 绿色 */

/* 可以缩写：#aabbcc → #abc */
color: #aabbcc;
color: #abc;            /* 效果相同 */
```

### 3. rgba()

带**透明度**的颜色，a（alpha）范围 0~1：

```css
color: rgba(0, 0, 0, 0.5);        /* 半透明黑色 */
color: rgba(255, 255, 255, 0.8);  /* 80% 不透明的白色 */
color: rgba(74, 144, 217, 0.3);   /* 淡蓝色阴影 */
background-color: rgba(0, 0, 0, 0.1); /* 极浅的灰色背景 */
```

## 盒模型（Box Model）

CSS 中每个元素都是一个矩形盒子，由四层组成（由外到内）：

```
┌─────────────────────────────────┐
│           margin（外边距）        │  ← 元素外部，透明
│  ┌───────────────────────────┐  │
│  │       border（边框）       │  │  ← 可见边框
│  │  ┌─────────────────────┐  │  │
│  │  │    padding（内边距）  │  │  │  ← 内容到边框的空白
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │  content（内容）│  │  │  │  ← 文字、图片等
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

- **content**：实际内容（文字、图片）
- **padding**：内容到边框的距离，背景色会填充 padding 区域
- **border**：边框，有颜色和粗细
- **margin**：元素与外部其他元素的距离，透明

## border-radius：圆角

让矩形边框变成圆角：

```css
button {
  border-radius: 4px;    /* 小圆角 */
  border-radius: 8px;    /* 中等圆角 */
  border-radius: 20px;   /* 大圆角（接近椭圆） */
  border-radius: 50%;    /* 完全圆形（正方形变圆） */
}

/* 单独控制某个角 */
.card {
  border-radius: 8px 8px 0 0;  /* 只有上面两个角是圆角 */
}
```

## box-shadow：阴影

给元素添加投影效果：

```css
/* 语法：x偏移 y偏移 模糊半径 颜色 */
.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 说明：
   0     → 水平偏移，0 表示不左右偏移
   2px   → 垂直偏移，2px 表示向下偏移 2px
   8px   → 模糊半径，值越大阴影越模糊
   rgba(0,0,0,0.1) → 10% 透明度的黑色
*/

/* 多个阴影叠加 */
.button {
  box-shadow: 0 1px 3px rgba(0,0,0,0.2),
              0 4px 12px rgba(0,0,0,0.1);
}
```

## border：边框

```css
/* 语法：粗细 样式 颜色 */
input {
  border: 1px solid #dddddd;    /* 1px 实线灰色边框 */
  border: 2px dashed #4a90d9;   /* 2px 虚线蓝色边框 */
  border: none;                 /* 去掉边框 */
}

/* 只设置某一侧的边框 */
li {
  border-bottom: 1px solid #eeeeee;  /* 只有下边框 */
  border-top: 1px solid #eeeeee;     /* 只有上边框 */
}

/* 边框样式 */
/* solid：实线  dashed：虚线  dotted：点线  none：无边框 */
```

## outline: none

输入框被点击时，浏览器默认会显示一个蓝色/橙色的 outline（轮廓），可以用 CSS 去掉：

```css
input {
  outline: none;  /* 去掉默认的焦点轮廓 */
}

/* 但去掉 outline 后要自定义 focus 样式，保证可访问性 */
input:focus {
  border-color: #4a90d9;  /* 改变边框颜色代替 outline */
  box-shadow: 0 0 0 2px rgba(74, 144, 217, 0.3);
}
```

## list-style: none

`ul` 列表默认每项前面有圆点，用 `list-style: none` 去掉：

```css
ul {
  list-style: none;   /* 去掉所有 li 前面的圆点 */
  padding: 0;         /* 同时去掉默认的左缩进 */
  margin: 0;
}
```

## border-bottom 做分割线

用 li 的下边框模拟列表分割线：

```css
.todo-item {
  border-bottom: 1px solid #eeeeee;  /* 每项下面有细线 */
  padding: 12px 16px;
}

/* 最后一项不需要分割线 */
.todo-item:last-child {
  border-bottom: none;
}
```

## li:last-child 伪类

`:last-child` 是 CSS **伪类**，选中"同类型中的最后一个子元素"：

```css
/* 选中 ul 里面最后一个 li */
li:last-child {
  border-bottom: none;
}

/* 其他常用伪类 */
li:first-child {
  border-top: 1px solid #eee;  /* 第一个 li 的上边框 */
}

li:nth-child(2) {
  background-color: #f0f0f0;  /* 第二个 li 的背景 */
}
```

## Todo List 完整样式示例

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #f0f2f5;
  font-family: "PingFang SC", "微软雅黑", sans-serif;
  color: #333;
}

#app {
  width: 480px;
  margin: 40px auto;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

#todoList {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  padding: 12px 16px;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  gap: 12px;
}

.todo-item:last-child {
  border-bottom: none;
}
```

## 小结

- 颜色三种写法：颜色名 / `#RRGGBB` / `rgba(r, g, b, a)`
- 盒模型从外到内：margin → border → padding → content
- `border-radius`：圆角，`50%` 变圆形
- `box-shadow`：`x偏移 y偏移 模糊 颜色`
- `border`：`粗细 样式 颜色`；`border-bottom` 做分割线
- `outline: none`：去掉输入框默认焦点轮廓
- `list-style: none`：去掉列表圆点
- `:last-child`：选中最后一个子元素
