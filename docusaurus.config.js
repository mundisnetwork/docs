const math = require("remark-math");
const katex = require("rehype-katex");
module.exports = {
  title: "Mundis Docs",
  tagline: "Mundis is the Operating System for Metaverse projects",
  url: "https://docs.mundis.io",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "mundis-labs", // Usually your GitHub org/user name.
  projectName: "mundis", // Usually your repo name.
  onBrokenLinks: "throw",
  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        label: "English",
      }
    },
  },
  themeConfig: {
    navbar: {
      logo: {
        alt: "Mundis documentation",
        src: "img/logo-mundis-horizontal.svg",
        srcDark: "img/logo-mundis-horizontal-dark.svg",
      },
      items: [
        {
          href: "https://discord.gg/8G2xEFJ5h7",
          label: "Chat",
          position: "right",
        },
        {
          href: "https://github.com/mundisnetwork",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      // This API key is "search-only" and safe to be published
      appId: "I51CE3JDW2",
      apiKey: "453c0ac77d7e484d36eee58a967b335e",
      indexName: "mundis",
      contextualSearch: true,
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Mundis Labs`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "src",
          routeBasePath: "/",
          breadcrumbs: false,
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};