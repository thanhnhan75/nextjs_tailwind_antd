export default function FormatPrice(number: number | string): string {
  const value = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumSignificantDigits: 5,
  }).format(Number(number));

  return value;
}
