function CapitalizeDateDaySpanish(date, locale) {
  if (locale == "es") {
    return (date.charAt(0).toUpperCase() + date.slice(1))
  } else {
    return date
  }
}

export default CapitalizeDateDaySpanish;