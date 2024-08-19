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
    link: "/aboutme.md" 
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
        text: "项目二",
        link: "/projects/project2.md",
      },
      {
        text: "项目三",
        link: "/projects/project3.md",
      },
    ],
  },
  {
    text: "主页",
    icon: "dashboard", 
    link: "/portfolio.md",  
  }
]);
