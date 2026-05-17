const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // Static assets
  eleventyConfig.addPassthroughCopy({ "banner.png": "banner.png" });
  eleventyConfig.addPassthroughCopy({ "logo.png": "logo.png" });


  // Posts collection — reverse-chronological
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md").reverse()
  );

  // Date filters
  eleventyConfig.addFilter("dateDisplay", (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  eleventyConfig.addFilter("dateISO", (date) =>
    new Date(date).toISOString().split("T")[0]
  );

  // Category label
  eleventyConfig.addFilter("categoryLabel", (cat) => {
    const map = { devlog: "Devlog", tutorial: "Tutorial", community: "Community" };
    return map[cat] || cat;
  });

  // Limit array to N items
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  // Strip leading YYYY-MM-DD- from a file slug
  eleventyConfig.addFilter("stripDate", (slug) =>
    slug.replace(/^\d{4}-\d{2}-\d{2}-/, "")
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
