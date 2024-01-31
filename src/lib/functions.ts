export const formatPrice = (price: string | null) => {
  const numericPrice = Number(price) || 0;
  return numericPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export function formatDate(dateString: any) {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "pt-BR",
    options
  );
  return formattedDate;
}
