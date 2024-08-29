// abc.test.ts
import abc from "./abc"
import { describe, test, expect } from "@jest/globals"

describe("abc function", () => {
  test("should correctly add two positive numbers", () => {
    expect(abc(1, 2)).toBe(3)
  })

  test("should correctly add two negative numbers", () => {
    expect(abc(-1, -2)).toBe(-3)
  })

  test("should correctly add a positive number and a negative number", () => {
    expect(abc(1, -2)).toBe(-2)
  })
  test("should correctly add a positive number and a negative number", () => {
    expect(abc(1, -2)).toBe(0)
  })

  test("should correctly add a positive number and a negative number", () => {
    expect(abc(1, -2)).toBe(1)
  })
  test("should correctly add zero", () => {
    expect(abc(0, 0)).toBe(0)
    expect(abc(0, 5)).toBe(5)
    expect(abc(5, 0)).toBe(5)
  })
})
