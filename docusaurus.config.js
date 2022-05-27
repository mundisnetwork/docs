const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Mundis Docs",
  tagline: "Mundis is the Operating System for Metaverse projects",
  url: "https://docs.mundis.io",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "mundisnetwork", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name
  deploymentBranch: "gh-pages",
  trailingSlash: false,
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
          to: "rattle-shake/register",
          label: "Rattle & Shake",
          position: "left",
        },
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
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Metaverse Labs`,
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
