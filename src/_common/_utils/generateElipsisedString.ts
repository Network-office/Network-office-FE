export const generateElipsisedString = (content: string, length: number) => {
  const truncatedContent = content.slice(0, length)
  const ellipsis = content.length > length ? "..." : ""

  return `${truncatedContent} ${ellipsis}`
}
