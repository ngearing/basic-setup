const config = require("./package.json")

module.exports = {
  proxy: config.proxy,
  files: ["dist/"],
}
