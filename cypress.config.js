const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'qzjfz2',
  chromeWebSecurity: false,
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-grep/src/plugin')(config)
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      // make sure to return the config object
      // as it might have been modified by the plugin
      return config
    },
  },
});
