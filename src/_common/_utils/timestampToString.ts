export const timestampToString = (timestamp: number | string) => {
  const date = new Date(timestamp)
  const now = new Date()

  // 오늘과 비교
  const isToday = now.toDateString() === date.toDateString()

  // 어제와 비교
  const yesterday = new Date()
  yesterday.setDate(now.getDate() - 1)
  const isYesterday = yesterday.toDateString() === date.toDateString()

  if (isToday) {
    return date.toLocaleTimeString("ko", {
      hour: "2-digit",
      minute: "2-digit"
    })
  } else if (isYesterday) {
    return "어제"
  } else {
    return date.toLocaleDateString("ko", {
      month: "short",
      day: "numeric",
      year: "numeric"
    })
  }
}
