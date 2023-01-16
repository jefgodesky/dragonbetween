import hasClass from './has-class'
import createElement from './create-element'

const dictionary: { [key: string]: string } = {
  'year-kingdom': 'Years of the Kingdom (YK)',
  'year-unity': 'Years of Unity (YU)',
  'year-taratai': 'Years of Taratai (YT)'
}

const getSystem = (th: HTMLTableCellElement): string => {
  for (const key of Object.keys(dictionary)) {
    if (hasClass(th, key)) return key
  }
  return ''
}

const toggleTimelineYears = (): void => {
  const timelines = document.querySelectorAll('table.timeline')
  for (const timeline of timelines) {
    const systems = [...timeline.querySelectorAll('th')]
      .filter(th => hasClass(th, ...Object.keys(dictionary)))
      .map(th => getSystem(th))
      .filter(system => system !== '')
    if (systems.length > 1) {
      timeline.classList.add('has-togglable-years')
      timeline.classList.add(`show-${systems[0]}`)
      const active = [systems[0]]

      const options = systems.map(system => {
        const wrapper = createElement('div', {})
        const attrs: { [name: string]: string } = { id: system, type: 'checkbox' }
        if (active.includes(system)) attrs.checked = 'checked'
        const checkbox = createElement('input', attrs)
        const label = createElement('label', { for: system }, dictionary[system])
        checkbox.addEventListener('change', event => {
          if ((event.target as HTMLInputElement).checked) {
            timeline.classList.add(`show-${system}`)
          } else {
            timeline.classList.remove(`show-${system}`)
          }
        })
        wrapper.appendChild(checkbox)
        wrapper.appendChild(label)
        return wrapper
      })

      const wrapper = createElement('div', { class: 'year-selection' })
      for (const option of options) { wrapper.appendChild(option) }
      timeline.before(wrapper)
    }
  }
}

export default toggleTimelineYears
