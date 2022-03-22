const path = require("path");
const { build } = require("vscode-theme-composer");

build(
  "cotion-theme",
  path.resolve(__dirname, "themes"),
  path.resolve(__dirname, "../themes")
);
