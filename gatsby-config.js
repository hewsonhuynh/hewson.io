module.exports = {
  siteMetadata: {
    siteTitle: 'Hewson',
    siteDescription: 'Hewson',
    siteImage: '/banner.png',
    siteUrl: 'https://hewson.io/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Hewson Huynh',
    authorDescription: "I'm a DevOps Engineer and technology enthusiast.",
    avatar: '/avatar.jpg',
    social: [
      {
        icon: `envelope`,
        url: `mailto:mail@hewsonhuynh.com`,
      },
      {
        icon: `github`,
        url: `https://github.com/hewsonhuynh/`,
      },
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/hewson-huynh/`,
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags',
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: false,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 ',
            },
          },
        },
        feedSearch: {
          symbol: '🔍',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X',
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        // replace "chronoblog-profile" with your own disqus shortname
        shortname: `hewsonhuynh-profile`,
      },
    },
  ],
};
