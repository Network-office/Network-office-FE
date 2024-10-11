const dateToString = (dateString: string | Date): string => {
  const date = new Date(dateString)
  const currentYear = new Date().getFullYear()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  if (year === currentYear) {
    return `${month}/${day}`
  } else {
    return `${year}/${month}/${day}`
  }
}

export default dateToString
