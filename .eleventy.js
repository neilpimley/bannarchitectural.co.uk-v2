module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "." });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("limit", (array, count) => {
    if (!Array.isArray(array)) return [];
    return array.slice(0, count);
  });

  eleventyConfig.addFilter("where", (array, key, value) => {
    if (!Array.isArray(array)) return [];
    return array.filter((item) => item && item[key] === value);
  });

  eleventyConfig.addFilter("readableDate", (dateString) => {
    if (!dateString) return "";
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }).format(new Date(dateString));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
