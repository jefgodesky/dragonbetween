import createElement from './create-element'

const handleThemeOptionSet = (event: Event): void => {
  event.preventDefault()
  event.stopPropagation()
  const select = document.querySelector('nav.top .theme-options select')
  if (select === null) return
  localStorage.setItem('theme', (select as HTMLSelectElement).value)
  window.location.reload()
}

export default function addThemeOptions (): void {
  const theme = localStorage.getItem('theme') ?? 'time'
  const before = document.querySelector('nav.top .login')
  if (before === null) return

  const attrs: { [key: string]: { [key: string]: string } } = {}
  const themeOptions = ['light', 'dark', 'os', 'time']
  for (const option of themeOptions) {
    attrs[option] = { value: option }
    if (theme === option) attrs[option].selected = 'selected'
  }

  const optLight = createElement('option', attrs.light, 'Light')
  const optDark = createElement('option', attrs.dark, 'Dark')
  const optOS = createElement('option', attrs.os, 'Per OS')
  const optTime = createElement('option', attrs.time, 'Per time')
  const options = [optLight, optDark, optOS, optTime]

  const select = createElement('select', { name: 'theme', id: 'theme-options' })
  for (const opt of options) {
    select.appendChild(opt)
  }

  const btn = createElement('button', {}, 'Set')
  const combo = createElement('div', { class: 'input-button-combo' })
  combo.appendChild(select)
  combo.appendChild(btn)

  const label = createElement('label', { for: 'theme-options' }, 'Choose your theme')
  const form = createElement('form', { class: 'theme-options' })
  form.addEventListener('submit', handleThemeOptionSet)
  form.appendChild(label)
  form.appendChild(combo)
  before.after(form)
}
