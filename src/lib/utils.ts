export function parsePriceToNumber(price: string): number {
  const digits = price.replace(/[^\d]/g, "");
  if (!digits) return 0;
  return parseInt(digits, 10);
}
