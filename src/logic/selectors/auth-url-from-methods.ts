import { AuthMethodsList } from 'pocketbase'

export default function selectAuthUrlFromMethods (list: AuthMethodsList, provider: string): string {
  const filtered = list.authProviders.filter(method => method.name === provider)
  if (filtered.length < 0 || filtered[0] === undefined) return '/'
  return filtered[0].authUrl + 'https://dragonbetween.net/redirect'
}
