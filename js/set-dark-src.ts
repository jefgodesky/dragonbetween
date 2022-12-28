export default function setDarkSrc (): void {
  const isDark = document.querySelector('body.dark-mode')
  if (isDark === null) return
  const images = Array.from(document.querySelectorAll('img[data-dark]'))
  for (const image of images) {
    const src = image.getAttribute('data-dark')
    if (src !== null) image.setAttribute('src', src)
  }
}
