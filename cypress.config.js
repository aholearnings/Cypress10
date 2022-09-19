const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qzjfz2',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-grep/src/plugin')(config)
      // make sure to return the config object
      // as it might have been modified by the plugin
      return config
    },
  },
});
