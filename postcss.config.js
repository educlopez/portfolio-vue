const purgecss = require("@fullhuman/postcss-purgecss");

const plugins = [...];

if (process.env.NODE_ENV === "production") {
  plugins.push(
    purgecss({
      content: [
        "./layouts/**/*.vue",
        "./components/**/*.vue",
        "./pages/**/*.vue"
      ],
      whitelist: ["html", "body"],
      whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
    })
  );
}

module.exports = { plugins };