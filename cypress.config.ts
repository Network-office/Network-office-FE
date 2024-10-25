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
      NEXT_PUBLIC_BASE_URL:
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8080"
    }
  }
})
