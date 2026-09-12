const STORAGE_KEY =
  "kamtali_sales";


export const getSales = () => {

  const sales =
    localStorage.getItem(
      STORAGE_KEY
    );

  return sales
    ? JSON.parse(sales)
    : [];

};


export const saveSales = (
  sales
) => {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(sales)
  );

};


export const createSale = (
  sale
) => {

  const sales =
    getSales();


  const newSale = {

    id:
      crypto.randomUUID(),

    ...sale,

    status:
      "Pendiente",

    createdAt:
      new Date().toISOString(),

    updatedAt:
      new Date().toISOString()

  };


  const updatedSales = [
    ...sales,
    newSale
  ];


  saveSales(updatedSales);


  return newSale;

};


export const updateSale = (
  updatedSale
) => {

  const sales =
    getSales();


  const updatedSales =
    sales.map((sale) =>

      sale.id === updatedSale.id

        ? {

            ...sale,

            ...updatedSale,

            updatedAt:
              new Date()
                .toISOString()

          }

        : sale

    );


  saveSales(updatedSales);


  return updatedSales;

};


export const deleteSale = (
  id
) => {

  const sales =
    getSales();


  const updatedSales =
    sales.filter(
      (sale) =>
        sale.id !== id
    );


  saveSales(updatedSales);


  return updatedSales;

};