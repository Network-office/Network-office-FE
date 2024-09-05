import "@jest/globals"
import "@testing-library/jest-dom"
import "@testing-library/react"
import "@testing-library/jest-dom/jest-globals"
import "@testing-library/react-hooks"

import { beforeAll, afterEach, afterAll } from "@jest/globals"
import { server } from "@/mock/node"

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
