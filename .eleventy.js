module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");

  return {
    htmlTemplateEngine: "njk",
    dir: { input: "src", output: "_site" }
  };
};
