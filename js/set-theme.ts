import times from './suntimes.json'

const getSrc = (isDark: boolean): string => `/theme/${isDark ? 'dark' : 'light'}/dragonbetween.png`

const toggleDarkMode = (isDark: boolean): void => {
  document.body.classList.toggle('dark-mode', isDark)
  const sitename = document.getElementById('sitename')
  if (sitename !== null) sitename.setAttribute('src', getSrc(isDark))
}

const detectDarkMode = (): void => {
  const watcher = window.matchMedia('(prefers-color-scheme: dark)')
  toggleDarkMode(watcher.matches)
  watcher.addEventListener('change', event => toggleDarkMode(event.matches))
}

const sunIsDown = (): boolean => {
  const now = new Date()
  const year = now.getFullYear()
  const leap = year % 400 === 0 || (year % 4 == 0 && year % 100 !== 0)
  const lastyear = new Date(year, 0, 0)
  const midnight = new Date(year, now.getMonth(), now.getDate())
  const diff = now.getTime() - lastyear.getTime()
  const daylen = 1000 * 60 * 60 * 24
  const dayprime = Math.floor(diff / daylen)
  const day = leap && dayprime > 59 ? dayprime - 1 : dayprime
  const sunrise = midnight.getTime() + (times[day][0] * 1000)
  const sunset = midnight.getTime() + (times[day][1] * 1000)
  return now.getTime() < sunrise || now.getTime() > sunset
}

export default function setTheme (): void {
  const opt = localStorage.getItem('theme') ?? 'time'
  switch (opt) {
    case 'light':
      toggleDarkMode(false)
      break
    case 'dark':
      toggleDarkMode(true)
      break
    case 'os':
      detectDarkMode()
      break
    default:
      toggleDarkMode(sunIsDown())
      break
  }
}
