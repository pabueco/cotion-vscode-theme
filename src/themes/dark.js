const { Theme } = require("vscode-theme-composer");

module.exports = new Theme()
  .setName("Dark")
  .setBaseColors("#2eaadc", "#202020")
  .setColors({
    tokens: {
      string: "#bde052",
      comment: "#997f66",
      variable: "#ffffffde",
      tag: "#e08594",
      attribute: "#a38ec3",
      entityClassType: "#ecbc55",
      functionMethodCall: "#49bde0",
      functionMethodDefinition: "#49bde0",
      keywordStorage: "#a38ec3",
      keywordControlOther: "#a38ec3",
      property: "#dde8eb",
      this: "#ffffffae",
      constNumber: "#ec9459",
      propertyKey: "#b9b9b9",
      punctuation: "#a8a8a8",
      keywordOperator: "#a38ec3",
      keywordOperatorLogicalComparison: "#a38ec3",
    },
  });
