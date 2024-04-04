const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //retries:{"runMode":2 , "openMode":0},
  video: true,
  screenshotOnRunFailure: true,
  
  projectId: 'y9jpuf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
