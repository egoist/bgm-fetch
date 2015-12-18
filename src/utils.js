export function getSeason () {
  const date = new Date()
  const year = date.getFullYear().toString().substring(2)
  const month = date.getMonth() + 1
  for (let m of [10, 7, 4, 1]) {
    if (m <= month) {
      return m.toString().length === 1 ? `${year}0${m}` : `${year}${m}`
    }
  }
}

export function formatByDay (data) {
  var days = new Array(7)
  var animes = []
  for (var d in data) {
    animes.push(data[d])
  }
  for (var i = 0; i < days.length; i++) {
    days[i] = animes.filter(function(anime) {
      return anime.weekDayCN == i
    })

  }
  return days
}
