const _version = "0.1.3"
const config = {
  siteTitle: "AfterROOT - Everything's Connected", // Site title.
  siteTitleShort: "AfterROOT", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "AfterROOT", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://afterroot.co", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Everything's Connected.", // Website description used for RSS feeds/meta description tag.
  siteFBAppID: "848840965544933", // FB Application ID for using app insights
  siteGATrackingID: "G-XXG24NGLY6", // Tracking code ID for google analytics.
  disqusShortname: "https-afterroot-co", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Sandip", // Username to display in the author segment.
  userEmail: "sandipvaghela311@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "thesandipv", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Gujarat, India", // User location to display in the author segment.
  userAvatar:
    "https://secure.gravatar.com/avatar/3dfb0a8b6735f2cdcf21e2956eb69e36", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  links: {
    githubUrl: "https://github.com/sandipv22",
    twitterUrl: "https://twitter.com/thesandipv",
    mailUrl: "mailto:sandipvaghela311@gmail.com",
    igUrl: "https://www.instagram.com/afterroot/",
    ytUrl: "https://www.youtube.com/channel/UCBoD9tMU--hsqlX9--Mrypw",
    fbUrl: "https://www.facebook.com/afterroot",
  },
  copyright: "Copyright © 2020 AfterROOT", // Copyright string for the footer of the website and RSS feed.
  version: _version,
}

// Validate
// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1)
module.exports = config
