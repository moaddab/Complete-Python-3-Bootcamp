export function toFa(value: number): string {
  return value.toLocaleString("fa-IR")
}

export function formatToman(amount: number): string {
  return `${toFa(amount)} تومان`
}

export function formatMinutes(minutes: number): string {
  return `${toFa(minutes)} دقیقه`
}

export function formatRating(rating: number): string {
  return rating.toLocaleString("fa-IR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })
}
