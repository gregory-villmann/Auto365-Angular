const {defineConfig} = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://localhost:4200",
    experimentalStudio: true,
    viewportWidth: 1024,
    viewportHeight: 768
  },
});
