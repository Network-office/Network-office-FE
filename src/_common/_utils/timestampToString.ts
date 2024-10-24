const dayCompare = (date1: Date, date2: Date) =>
  date1.toDateString() === date2.toDateString()

export const timestampToString = (timestamp: number | string) => {
  const date = new Date(timestamp)
  const now = new Date()

  const isToday = dayCompare(date, now)

  const yesterday = new Date()
  yesterday.setDate(now.getDate() - 1)
  const isYesterday = dayCompare(date, yesterday)

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
