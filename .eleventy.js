module.exports = function(eleventyConfig) {
  // Copy the `css` and `images` directories to the output
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};

