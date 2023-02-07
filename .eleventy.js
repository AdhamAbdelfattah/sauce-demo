module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("./sass/");
    eleventyConfig.addPassthroughCopy("./_site/css/");
    eleventyConfig.addPassthroughCopy("images");
}