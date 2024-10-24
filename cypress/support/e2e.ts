import { worker } from "../../src/mock/browser"

Cypress.on("test:before:run:async", async () => {
  await worker.start({
    serviceWorker: {
      url: "http://localhost:3000/mockServiceWorker.js"
    }
  })
})

Cypress.on("test:after:run", async () => {
  worker.resetHandlers()
})
