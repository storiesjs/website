export default {
  github: 'https://github.com/storiesjs/web-site',
  docsRepositoryBase: 'https://github.com/storiesjs/web-site/blob/main',
  titleSuffix: ' – StoriesJS',
  logo: (
    <>
      <span className="font-extrabold">StoriesJS</span>
      <span className="mr-2 ml-2 text-gray-500 font-normal hidden md:inline">
        The tool for UI development
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="StoriesJS: the tool for UI development" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta property="og:title" content="StoriesJS: the tool for UI development" />
      <meta property="og:description" content="StoriesJS: the tool for UI development" />
      <meta name="apple-mobile-web-app-title" content="StoriesJS" />
    </>
  ),
  search: true,
  unstable_faviconGlyph: '👋',
  prevLinks: true,
  nextLinks: true,
  floatTOC: true,
  footer: true,
  footerEditLink: ({ locale }) => 'Edit this page on GitHub',
  footerText: <>GPL-2.0 {new Date().getFullYear()} © StoriesJS team</>
}