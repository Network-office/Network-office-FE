const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./"
})

const config = {
  testEnvironmentOptions: { customExportConditions: [""] },
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.polyfills.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "@swc/jest"
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./test-results/junit",
        outputName: "results.xml"
      }
    ]
  ],
  coverageDirectory: "./coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
}

module.exports = createJestConfig(config)
