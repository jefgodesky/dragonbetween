export default function roundNearest (num: number, step: number): number {
  return Math.round(num / step) * step
}
