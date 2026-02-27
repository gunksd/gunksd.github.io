---
title: 常用 HTML 标签
icon: file-code
order: 2
tag: [HTML]
---

# 常用 HTML 标签

## 标题标签 h1 ~ h6

HTML 提供六级标题，数字越小字越大，表示层级越高：

```html
<h1>一级标题（最大，页面主标题）</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题（最小）</h6>
```

浏览器效果：
- `<h1>` 最大最粗
- `<h6>` 最小最细
- 每个标题独占一行

一个页面通常只有一个 `<h1>`，作为页面的唯一主标题。

## 属性（Attribute）的概念

属性写在开始标签里，用来**补充说明标签的特征**：

```html
<标签名 属性名="属性值">内容</标签名>
```

多个属性用空格分隔：

```html
<input type="text" placeholder="请输入内容" id="myInput" />
```

## 输入框 input

`<input>` 是**自闭合标签**（见下节），不需要结束标签：

```html
<!-- 文本输入框 -->
<input type="text" placeholder="请输入待办事项" />

<!-- 复选框 -->
<input type="checkbox" />

<!-- 密码框 -->
<input type="password" placeholder="请输入密码" />

<!-- 按钮（不推荐，用 button 更好） -->
<input type="button" value="点我" />
```

常用属性：

| 属性 | 说明 | 示例 |
|------|------|------|
| `type` | 输入框类型 | `text` / `checkbox` / `password` |
| `placeholder` | 占位提示文字（灰色） | `placeholder="请输入..."` |
| `id` | 唯一标识符 | `id="todoInput"` |
| `value` | 输入框当前值 | `value="默认内容"` |

## 按钮 button

```html
<!-- 普通按钮 -->
<button>添加</button>

<!-- 带 id 的按钮，方便 JS 获取 -->
<button id="addBtn">添加待办</button>

<!-- type="button" 防止在表单中自动提交 -->
<button type="button">点击</button>
```

## 无序列表 ul / li

`ul`（unordered list）+ `li`（list item）组合使用：

```html
<ul>
  <li>学习 HTML</li>
  <li>学习 CSS</li>
  <li>学习 JavaScript</li>
</ul>
```

浏览器默认会在每个 `li` 前面加一个小圆点（bullet），可以用 CSS 去掉。

在 Todo List 项目里，我们用 `<ul>` 作为待办列表容器，用 JS 动态往里面插入 `<li>`。

## 自闭合标签

有些标签**没有内容**，不需要结束标签，写成自闭合形式：

```html
<!-- 写法一：斜杠在结尾（推荐） -->
<input type="text" />
<br />
<img src="图片.jpg" alt="图片描述" />

<!-- 写法二：省略斜杠（也合法） -->
<input type="text">
<br>
<img src="图片.jpg" alt="图片描述">
```

常见自闭合标签：

| 标签 | 作用 |
|------|------|
| `<input>` | 输入框 |
| `<br>` | 换行 |
| `<hr>` | 水平分割线 |
| `<img>` | 图片 |
| `<meta>` | 元信息 |
| `<link>` | 外部资源链接 |

## Todo List 用到的标签结构

```html
<div id="app">
  <h1>我的待办清单</h1>

  <!-- 输入区域 -->
  <div class="input-area">
    <input type="text" id="todoInput" placeholder="添加新任务..." />
    <button id="addBtn">添加</button>
  </div>

  <!-- 待办列表 -->
  <ul id="todoList">
    <!-- JS 动态插入 li -->
  </ul>
</div>
```

## 小结

- `h1`~`h6`：六级标题，数字越小越重要
- `input`：自闭合，用 `type` 指定类型，`placeholder` 设置提示文字
- `button`：按钮，内容写在标签中间
- `ul` + `li`：无序列表，`ul` 是容器，`li` 是每一项
- 属性格式：`属性名="属性值"`，多个属性用空格分隔
- 自闭合标签没有内容，不需要结束标签
