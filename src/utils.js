export function getDate() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  let season
  for (const m of [10, 7, 4, 1]) {
    if (m <= month) {
      season = m
    }
  }
  return {
    year,
    season
  }
}

export function formatByWeekDay(data) {
  const res = {}
  for (const item of data) {
    const weekday = new Date(item.begin).getDay()
    res[weekday] = res[weekday] || []
    res[weekday].push(item)
  }
  return res
}

export function ensureSeason(season) {
  return season < 10 ? `0${season}` : season
}
