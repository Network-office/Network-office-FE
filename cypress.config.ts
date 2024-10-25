import { defineConfig } from "cypress"

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack"
    }
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {},
    env: {
      defaultCommandTimeout: 10000,
      pageLoadTimeout: 10000
    }
  }
})
