const getSrc = (isDark: boolean): string => `/theme/${isDark ? 'dark' : 'light'}/dragonbetween.png`

const toggleDarkMode = (isDark: boolean): void => {
  document.body.classList.toggle('dark-mode', isDark)
  const sitename = document.getElementById('sitename')
  if (sitename !== null) sitename.setAttribute('src', getSrc(isDark))
}

export default function detectDarkMode (): void {
  const watcher = window.matchMedia('(prefers-color-scheme: dark)')
  toggleDarkMode(watcher.matches)
  watcher.addEventListener('change', event => toggleDarkMode(event.matches))
}
