import createElement from './create-element'

const handleThemeOptionSet = (event: Event): void => {
  event.preventDefault()
  event.stopPropagation()
  const select = document.querySelector('nav.top .theme-options select')
  if (select === null) return
  localStorage.setItem('theme', (select as HTMLSelectElement).value)
}

export default function addThemeOptions (): void {
  const before = document.querySelector('nav.top .login')
  if (before === null) return

  const optLight = createElement('option', { value: 'light' }, 'Light')
  const optDark = createElement('option', { value: 'dark' }, 'Dark')
  const optOS = createElement('option', { value: 'os' }, 'Per OS')
  const optTime = createElement('option', { value: 'time' }, 'Per time')
  const options = [optLight, optDark, optOS, optTime]

  const select = createElement('select', { name: 'theme' })
  for (const opt of options) {
    select.appendChild(opt)
  }

  const btn = createElement('button', {}, 'Set')
  const combo = createElement('div', { class: 'input-button-combo' })
  combo.appendChild(select)
  combo.appendChild(btn)

  const form = createElement('form', { class: 'theme-options' })
  form.addEventListener('submit', handleThemeOptionSet)
  form.appendChild(combo)
  before.after(form)
}
