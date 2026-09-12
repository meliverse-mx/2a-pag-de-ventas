import {
  useState
} from "react";

import useSales
  from "../hooks/useSales";

import SalesForm
  from "../components/SalesForm";

import SalesTable
  from "../components/SalesTable";

import Filters
  from "../components/Filters";


function Sales() {

  const {

    sales,

    addSale,

    editSale,

    removeSale,

    changeStatus

  } = useSales();


  const [
    editingSale,
    setEditingSale
  ] = useState(null);


  const [
    filters,
    setFilters
  ] = useState({

    status:
      "Todos",

    dateFrom:
      "",

    dateTo:
      ""

  });


  const handleSave = (
    sale
  ) => {

    if (
      editingSale
    ) {

      editSale(sale);

      setEditingSale(null);

    } else {

      addSale(sale);

    }

  };


  const filteredSales =
    sales.filter(
      (sale) => {

        const statusMatch =
          filters.status ===
          "Todos"

            ? true

            : sale.status ===
              filters.status;


        const fromMatch =
          !filters.dateFrom

            ? true

            : sale.date >=
              filters.dateFrom;


        const toMatch =
          !filters.dateTo

            ? true

            : sale.date <=
              filters.dateTo;


        return (

          statusMatch &&
          fromMatch &&
          toMatch

        );

      }
    );


  return (

    <div>

      <div className="page-header">

        <h1>

          Mis ventas 

        </h1>

        <p>

          Registra, edita y da
          seguimiento a tus ventas.

        </p>

      </div>


      <div className="sales-page">

        <SalesForm

          onAddSale={
            handleSave
          }

          editingSale={
            editingSale
          }

          onCancelEdit={() =>
            setEditingSale(null)
          }

        />


        <div className="sales-content">

          <Filters

            filters={
              filters
            }

            setFilters={
              setFilters
            }

          />


          <SalesTable

            sales={
              filteredSales
            }

            onEdit={
              setEditingSale
            }

            onDelete={
              removeSale
            }

            onChangeStatus={
              changeStatus
            }

          />

        </div>

      </div>

    </div>

  );

}

export default Sales;