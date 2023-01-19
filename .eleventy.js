module.exports = function(config) {
  config.setDynamicPermalinks(false)
  config.addWatchTarget('./src/scss/')

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    passthroughFileCopy: true,
    templateFormats : [
      "njk",
      "md",
      "css",
      "png",
      "jpg",
      "jpeg",
      "ico"
    ],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
  }
}
