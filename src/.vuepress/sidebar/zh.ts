import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "项目",
      icon: "laptop-code",
      prefix: "projects/",
      children: "structure",
      collapsible: true
    },
    {
      text: "笔记",
      icon: "book",
      prefix: "notes/",
      children: [
        {
          text: "计算机网络笔记",
          icon: "network-wired",
          prefix: "network/",
          children: "structure",
          collapsible: true
        },
        // 这里可以继续添加其他子分类或子项
      ],
      collapsible: true,
    },
    {
      text: "web3",
      icon: "sack-dollar",
      prefix: "web3/",
      children: "structure",
      collapsible: true
    },
    {
      text: "随笔",
      icon: "pencil",
      prefix: "poets/",
      children: "structure",
      collapsible: true
    },
    {
      text: "关于我",
      icon: "person-rays",
      link: "/aboutme.md",
    },
    {
      text: "Sponsor",
      icon: "mug-hot",
      link: "/sponsor/coffee.md",
    },
  ],
});
