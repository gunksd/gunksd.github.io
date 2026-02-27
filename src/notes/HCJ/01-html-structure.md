---
title: HTML 基本结构
icon: file-code
order: 1
tag: [HTML]
---

# HTML 基本结构

HTML（HyperText Markup Language）是网页的骨架，用**标签**来描述页面内容的结构。

## 最小 HTML 文档

每个 HTML 文件都必须包含以下基本结构：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>我的第一个网页</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>这是我的第一个网页。</p>
  </body>
</html>
```

## 各标签说明

### `<!DOCTYPE html>`

告诉浏览器这是一个 HTML5 文档。这行必须放在文件第一行，不是 HTML 标签，是声明。

### `<html>`

整个页面的根标签，所有内容都写在它里面。`lang="zh-CN"` 告诉浏览器页面主要语言是简体中文。

### `<head>`

**头部区域**，放给浏览器看的信息（不直接显示在页面上）：

| 标签 | 作用 |
|------|------|
| `<meta charset="UTF-8">` | 设置字符编码，支持中文 |
| `<meta name="viewport" ...>` | 让页面在手机上正常显示 |
| `<title>` | 标签页上显示的标题 |
| `<link>` | 引入外部 CSS 文件 |
| `<script>` | 引入外部 JS 文件 |

### `<body>`

**正文区域**，所有要显示在页面上的内容都写在这里。

## 标签成对出现

HTML 标签**绝大多数成对出现**，有开始标签就有结束标签：

```html
<!-- 开始标签         结束标签（多了一个斜杠） -->
<p>这是一段文字</p>
<h1>这是标题</h1>
<div>这是一个容器</div>
```

标签可以**嵌套**，即标签里面包含另一个标签。内层标签必须在外层标签内完整关闭：

```html
<!-- 正确：嵌套关系清晰 -->
<body>
  <div>
    <p>段落在 div 里面</p>
  </div>
</body>

<!-- 错误：标签交叉嵌套 -->
<div>
  <p>错误示例</div>
</p>
```

## 注释

```html
<!-- 这是注释，浏览器不会显示注释内容 -->
<!-- 注释可以用来临时隐藏代码或写说明 -->
```

## 缩进习惯

子标签相对父标签缩进 2 个空格，这样代码层次清晰，便于阅读：

```html
<html>
  <head>
    <title>标题</title>
  </head>
  <body>
    <div>
      <p>内容</p>
    </div>
  </body>
</html>
```

## 小结

- `<!DOCTYPE html>` 声明文档类型
- `<html>` 包裹整个页面
- `<head>` 放元信息（不显示在页面）
- `<body>` 放页面内容（显示在页面）
- `<title>` 设置标签页标题
- 标签成对出现，内层标签要在外层内关闭
