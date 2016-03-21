export function getSeason() {
  const date = new Date()
  const year = date.getFullYear().toString().substring(2)
  const month = date.getMonth() + 1
  for (let m of [10, 7, 4, 1]) {
    if (m <= month) {
      return m.toString().length === 1 ? `${year}0${m}` : `${year}${m}`
    }
  }
}

export function formatByDay(data) {
  const days = new Array(7)
  const animes = []
  Object.keys(data).map(name => animes.push(data[name]))
  for (var i = 0; i < days.length; i++) {
    days[i] = animes.filter(anime => anime.weekDayCN === i) // eslint-disable-line
  }
  return days
}
