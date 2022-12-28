export default function calculateModifier (score: number): string {
  if (score < 4) return '-3'
  if (score < 6) return '-2'
  if (score < 9) return '-1'
  if (score < 13) return '+0'
  if (score < 16) return '+1'
  if (score < 18) return '+2'
  return '+3'
}
