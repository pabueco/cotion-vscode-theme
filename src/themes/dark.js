const { Theme } = require("vscode-theme-composer");

module.exports = new Theme()
  .setName("Dark")
  .setBaseColors("#52a7d9", "#202020")
  .setColors({
    tokens: {
      string: "#bde052",
      comment: "#997f66",
      variable: "#e1e1e1",
      // string: "#afd194",
      tag: "#e08594",
      attribute: "#8eb7c3",
      entityClassType: "#ecbc55",
      functionMethodCall: "#49bde0",
      functionMethodDefinition: "#49bde0",
      keywordStorage: "#8eb7c3",
      keywordControlOther: "#8eb7c3",
      property: "#dde8eb",
      this: "#dde8eb",
      constNumber: "#ec9459",
      propertyKey: "#b9b9b9",
      punctuation: "#a8a8a8",
      keywordOperator: "#8eb7c3",
      keywordOperatorLogicalComparison: "#a2d0df",
    },
  });
// .setTransformOverrideColors(true)
// .modifyColorGeneration({
//   colorTransform: (color) => {
//     return color.spin(45);
//   },
// });
// .modifyColorGeneration({
//   brightnessStart: null,
// });
