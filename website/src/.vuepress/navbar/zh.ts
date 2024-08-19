import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    link: "/",
    icon: "home", 
    text: "导航"
  },
  { 
    text: "文章", 
    icon: "shrimp", 
    link: "/projects/Rooch.md" 
  },
  {
    text: "项目",
    icon: "diagram-project", 
    children: [
      {
        text: "Pocket-Monsters-On-Rooch",
        link: "/projects/Rooch.md",
      },
      {
        text: "SecureFlow",
        link: "/projects/SecureFlow.md",
      },
      {
        text: "Vue",
        link: "/projects/Vue.md",
      },
    ],
  },
  {
    text: "主页",
    icon: "dashboard", 
    link: "/portfolio.md",  
  },
  {
    text: "工具栏",
    icon: "toolbox", 
    children: [
      {
        text: "icon工具",
        link: "https://fontawesome.com/icons"
      },
      {
        text: "vuepress主题官方文档",
        link: "https://theme-hope.vuejs.press/zh/"
      },
      {
        text: "React文档",
        link: "https://zh-hans.react.dev/"
      },
      {
        text: "Vue文档",
        link: "https://cn.vuejs.org/guide/quick-start"
      },
      {
        text: "Remix",
        link: "https://remix.ethereum.org/#lang=zh&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.24+commit.e11b9ed9.js"
      },
      {
        text: "时间戳",
        link: "https://www.niaoseo.com/tools/unixtime.html"
      },
      {
        text: "Solidity Examples",
        link: "https://solidity-by-example.org/"
      },
    ]
  }

]);
