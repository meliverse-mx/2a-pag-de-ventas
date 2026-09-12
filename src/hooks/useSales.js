import {
  useEffect,
  useState
} from "react";

import {

  getSales,
  createSale,
  updateSale,
  deleteSale

} from "../services/salesService";


function useSales() {

  const [sales, setSales] =
    useState([]);


  useEffect(() => {

    loadSales();

  }, []);


  const loadSales = () => {

    const savedSales =
      getSales();

    setSales(savedSales);

  };


  const addSale = (
    sale
  ) => {

    createSale(sale);

    loadSales();

  };


  const editSale = (
    sale
  ) => {

    updateSale(sale);

    loadSales();

  };


  const removeSale = (
    id
  ) => {

    deleteSale(id);

    loadSales();

  };


  const changeStatus = (
    id,
    status
  ) => {

    const sale =
      sales.find(
        (sale) =>
          sale.id === id
      );


    if (!sale) return;


    editSale({

      ...sale,

      status

    });

  };


  return {

    sales,

    addSale,

    editSale,

    removeSale,

    changeStatus

  };

}


export default useSales;