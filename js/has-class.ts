const hasClass = (el: HTMLElement, ...classes: string[]) => {
  for (const className of classes) {
    if (el.classList.contains(className)) return true
  }
  return false
}

export default hasClass
