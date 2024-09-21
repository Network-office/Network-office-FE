export const generateFallbackName = (name: string) => {
  if (!name) return ""

  const names = name.split(" ")

  if (names.length > 1) {
    return names
      .map((name) => name[0])
      .join("")
      .slice(0, 2)
      .toUpperCase()
  }

  return names[0].slice(0, 2).toUpperCase()
}
