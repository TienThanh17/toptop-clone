const { override, useBabelRc } = require("customize-cra");
// import { override, useBabelRc } from "customize-cra";

module.exports = override(
  useBabelRc()
);
