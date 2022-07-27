const {defineConfig} = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // specPattern:"cypress/e2e/*.feature",
            specPattern: "**/*.feature",
                on('file:preprocessor', cucumber())

        },
        excludeSpecPattern: '*.js',
        defaultCommandTimeout: 8000,
        reporter: "mochawesome",

        "env": {
            url: "https://rahulshettyacademy.com/angularpractice/",
        },


    },
});
