---
title: Flexbox 弹性布局
icon: brush
order: 5
tag: [CSS]
---

# Flexbox 弹性布局

Flexbox 是 CSS 中最常用的布局方式，专门解决"如何排列子元素"的问题。

## 开启 Flex：display: flex

在**父元素**上添加 `display: flex`，子元素就会自动横排：

```css
/* 父元素 */
.input-area {
  display: flex;   /* 开启 flex，子元素自动横排 */
}
```

```html
<!-- HTML 结构 -->
<div class="input-area">
  <input type="text" />   <!-- 子元素1，自动排在左边 -->
  <button>添加</button>   <!-- 子元素2，自动排在右边 -->
</div>
```

没有 flex 时，`input` 和 `button` 默认各占一行；加了 flex 后，它们自动排在同一行。

## gap：子元素之间的间距

```css
.input-area {
  display: flex;
  gap: 8px;   /* 子元素之间间隔 8px */
}
```

效果：
```
[  input 输入框  ] [按钮]
                  ↑
                8px 间距
```

## justify-content：主轴对齐方式

控制子元素在**横轴方向**如何分布：

```css
.container {
  display: flex;
  justify-content: flex-start;    /* 靠左（默认） */
  /* justify-content: center; */       /* 居中 */
  /* justify-content: flex-end; */     /* 靠右 */
  /* justify-content: space-between; */ /* 两端对齐 */
}
```

四种对齐方式图示：

```
flex-start（靠左）：
[A][B][C]                    ←─────────────→

center（居中）：
          [A][B][C]          ←─────────────→

flex-end（靠右）：
                    [A][B][C]←─────────────→

space-between（两端对齐）：
[A]         [B]         [C]  ←─────────────→
```

Todo List 输入区用 `space-between` 让输入框和按钮分布在两端：

```css
.input-area {
  display: flex;
  justify-content: space-between;
}
```

## flex: 1：占满剩余空间

`flex: 1` 让元素**尽可能占满容器剩余的空间**：

```css
.input-area {
  display: flex;
  gap: 8px;
}

.input-area input {
  flex: 1;   /* 输入框占满剩余空间 */
}

/* 按钮不设 flex，保持自身宽度 */
.input-area button {
  width: 80px;
}
```

效果：
```
|←──────── 容器宽度 ────────────────→|
|←── flex:1，占满剩余 ──→| 80px 按钮 |
```

## padding 两种写法

```css
/* 写法一：四个方向相同 */
button {
  padding: 8px;  /* 上下左右都是 8px */
}

/* 写法二：上下 / 左右 */
button {
  padding: 8px 16px;  /* 上下 8px，左右 16px */
}

/* 完整四值写法（顺时针：上 右 下 左） */
button {
  padding: 4px 12px 4px 12px;
}
```

直观理解：
```
padding: 8px 16px

    ←─ 16px ─→
↑
8px   内容区
↓
    ←─ 16px ─→
```

## cursor: pointer：手形光标

鼠标悬停在按钮上时，光标从箭头变成手形，提示用户可以点击：

```css
button {
  cursor: pointer;  /* 鼠标悬停时显示手形 */
}
```

## align-items：交叉轴对齐

控制子元素在**纵轴方向**如何对齐（flex 横排时，纵轴是垂直方向）：

```css
.input-area {
  display: flex;
  align-items: center;    /* 垂直居中对齐（最常用） */
  /* align-items: flex-start; */ /* 顶部对齐 */
  /* align-items: flex-end; */   /* 底部对齐 */
  /* align-items: stretch; */    /* 拉伸到容器高度（默认） */
}
```

## Todo List 输入区完整样式

```css
.input-area {
  display: flex;        /* 子元素横排 */
  gap: 8px;             /* 元素间距 8px */
  align-items: center;  /* 垂直居中 */
  margin-bottom: 16px;  /* 与列表的间距 */
}

.input-area input {
  flex: 1;              /* 占满剩余空间 */
  height: 40px;
  padding: 0 12px;      /* 上下0，左右12px */
  font-size: 14px;
}

.input-area button {
  height: 40px;
  padding: 0 16px;      /* 上下0，左右16px */
  cursor: pointer;      /* 手形光标 */
  font-size: 14px;
}
```

## 小结

- `display: flex`：开启弹性布局，子元素自动横排
- `gap`：子元素之间的间距
- `justify-content`：主轴对齐（`flex-start`/`center`/`flex-end`/`space-between`）
- `flex: 1`：占满容器剩余空间
- `padding: 8px`：四方向相同；`padding: 8px 16px`：上下/左右
- `cursor: pointer`：鼠标变手形，提示可点击
