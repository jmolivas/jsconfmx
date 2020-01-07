module.exports = {
  siteMetadata: {
    title: `Octahedroid`,
    description: `We do JAMstack`,
    author: `@jmolivas`,
    github: `https://github.com/octahedroid`,
    blog: `/#`,
    product: `/#`,
    docs: `/#`,
    siteUrl: 'http://example.com'
  },
  plugins: [
    {
      resolve: `gatsby-theme-octahedroid`,
      options: {
        root: __dirname,
        themePath: `${__dirname}/theme`
      }
    }
  ]
};
