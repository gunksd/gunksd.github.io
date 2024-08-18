import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/portfolio",
  "/zh/",
  "/zh/demo/",
  {
    text: "项目",
    icon: "lightbulb",
    prefix: "/zh/guide/",
    children: [
      {
        text: "Rooch",
        icon: "Pocket-Monsters-On-Rooch",
        prefix: "ba/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
