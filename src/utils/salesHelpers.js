export const getSalesStats = (
  sales
) => {

  const totalSales =
    sales.length;


  const approvedSales =
    sales.filter(
      (sale) =>
        sale.status ===
        "Aprobada"
    );


  const pendingSales =
    sales.filter(
      (sale) =>
        sale.status ===
        "Pendiente"
    );


  const approvedCommission =
    approvedSales.reduce(
      (total, sale) =>
        total +
        Number(sale.commission || 0),
      0
    );


  const potentialCommission =
    sales.reduce(
      (total, sale) =>
        total +
        Number(sale.commission || 0),
      0
    );


  return {

    totalSales,

    approvedSales:
      approvedSales.length,

    pendingSales:
      pendingSales.length,

    approvedCommission,

    potentialCommission

  };

};