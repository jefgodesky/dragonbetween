export default function createElement (tag: string, attributes: { [key: string]: string }, text?: string): HTMLElement {
  const el = document.createElement(tag)
  if (text !== undefined) el.appendChild(document.createTextNode(text))
  for (const attr of Object.keys(attributes)) {
    el.setAttribute(attr, attributes[attr])
  }
  return el
}
