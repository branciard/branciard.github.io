export default {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  ipfsPathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  ipnsPathPrefix: 'ipns/francoisbranciard.com/',
  siteTitle: 'Francois Branciard Blog', // Navigation and Site Title
  siteTitleAlt: 'Francois Branciard Personal Website', // Alternative Site title for SEO
  siteUrl: 'https://francoisbranciard.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '__PATH_PREFIX__/assets/bg.png', // Your image for og:image tag. You can find it in the /static folder
  defaultBg: '__PATH_PREFIX__/assets/bg.png', // default post background header
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Francois Branciard Personal Website', // Your site description
  author: 'Francois Branciard', // Author for schemaORGJSONLD
  siteLogo: '__PATH_PREFIX__/assets/logo.png', // Image for schemaORGJSONLD

  userTwitter: '@fbranciard', // Twitter Username - Optional

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Settings for typography.ts
  headerFontFamily: 'Bitter',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '18px',

  POST_PER_PAGE: 4,
};
