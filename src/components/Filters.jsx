function Filters({

  filters,
  setFilters

}) {

  const updateFilter = (
    name,
    value
  ) => {

    setFilters({

      ...filters,

      [name]: value

    });

  };


  const clearFilters = () => {

    setFilters({

      status: "Todos",

      dateFrom: "",

      dateTo: ""

    });

  };


  return (

    <div className="filters">

      <select
        value={
          filters.status
        }
        onChange={(e) =>
          updateFilter(
            "status",
            e.target.value
          )
        }
      >

        <option>

          Todos

        </option>

        <option>

          Pendiente

        </option>

        <option>

          Aprobada

        </option>

      </select>


      <input
        type="date"
        value={
          filters.dateFrom
        }
        onChange={(e) =>
          updateFilter(
            "dateFrom",
            e.target.value
          )
        }
      />


      <input
        type="date"
        value={
          filters.dateTo
        }
        onChange={(e) =>
          updateFilter(
            "dateTo",
            e.target.value
          )
        }
      />


      <button
        onClick={clearFilters}
      >

        Limpiar

      </button>

    </div>

  );

}

export default Filters;