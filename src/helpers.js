
const camelCase = (str) => str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

module.exports = {
  camelCase,
  capitalize,
  ClassCase: (str) => capitalize(camelCase(str)),
}
