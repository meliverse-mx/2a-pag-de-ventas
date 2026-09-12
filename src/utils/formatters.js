export const formatCurrency = (
  amount
) => {

  return new Intl.NumberFormat(
    "es-MX",
    {
      style: "currency",
      currency: "MXN"
    }
  ).format(amount);

};


export const formatDate = (
  date
) => {

  if (!date) return "";

  return new Date(
    `${date}T12:00:00`
  ).toLocaleDateString(
    "es-MX",
    {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }
  );

};