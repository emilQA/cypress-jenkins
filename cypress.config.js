const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    defaultCommandTimeout:8000,
    reporter:"mochawesome",

    "env" : {
      url: "https://rahulshettyacademy.com/angularpractice/",
    },


  },
});
