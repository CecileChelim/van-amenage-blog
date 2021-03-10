module.exports = {
  //-- SITE SETTINGS -----
  author: "@konstantinmuenster",
  siteTitle: "Van aménagé - toutes les ressources pour bien aménager son van",
  siteShortTitle: "Van aménagé", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "an aménagé - toutes les ressources pour bien aménager son van",
  siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
  siteLanguage: "fr_FR",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix:
    "Van aménagé - toutes les ressources pour bien aménager son van", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
      background: "#FFFFFF",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 3,

  articlesIsolation: [
    {
      name: "test",
      url: "https://www.linkedin.com/in/konstantin-muenster/",
    },
    {
      name: "Medium",
      url: "https://konstantinmuenster.medium.com/",
    },
    {
      name: "Github",
      url:
        "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/konstanmnster",
    },
  ],

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/konstantin-muenster/",
    },
    {
      name: "Medium",
      url: "https://konstantinmuenster.medium.com/",
    },
    {
      name: "Github",
      url:
        "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/konstanmnster",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Isolation",
        url: "/isolation-van-aménagé",
      },
      {
        name: "Cloison & parois",
        url: "/paroi-van-aménagé",
      },
      {
        name: "Électricité",
        url: "/#projects",
      },
      {
        name: "WC / Douche",
        url: "/#projects",
      },
      {
        name: "Homologation VASP",
        url: "/#projects",
      },
      {
        name: "Ouvertures & fenêtres",
        url: "/#projects",
      },
      {
        name: "Meubles & aménagement",
        url: "/#projects",
      },
      {
        name: "Décoration",
        url: "/#projects",
      },
    ],
    button: {
      name: "Ajouter un lien ?",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
