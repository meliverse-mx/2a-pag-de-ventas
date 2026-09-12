import {
  useState,
  useEffect
} from "react";

import {
  packages
} from "../data/packages";


function SalesForm({

  onAddSale,
  editingSale,
  onCancelEdit

}) {


  const getInitialForm = () => {

    if (editingSale) {

      return {

        client:
          editingSale.client,

        package:
          editingSale.package,

        date:
          editingSale.date,

        amount:
          editingSale.amount,

        commission:
          editingSale.commission

      };

    }


    return {

      client: "",
      package: "",
      date: "",
      amount: "",
      commission: ""

    };

  };


  const [
    form,
    setForm
  ] = useState(
    getInitialForm()
  );

  useEffect(() => {

/*   setForm(
    getInitialForm()
  ); */

}, [editingSale]);

  const handleChange = (
    e
  ) => {

    const {
      name,
      value
    } = e.target;


    if (
      name === "package"
    ) {

      const selectedPackage =
        packages.find(
          (item) =>
            item.destination === value
        );


      setForm({

        ...form,

        package: value,

        amount:
          selectedPackage?.price || "",

        commission:
          selectedPackage?.commission || ""

      });

      return;

    }


    setForm({

      ...form,

      [name]: value

    });

  };


  const handleSubmit = (
    e
  ) => {

    e.preventDefault();


    onAddSale({

      ...editingSale,

      ...form,

      amount:
        Number(form.amount),

      commission:
        Number(form.commission)

    });


    setForm({

      client: "",
      package: "",
      date: "",
      amount: "",
      commission: ""

    });

  };


  return (

    <form
      className="sales-form"
      onSubmit={handleSubmit}
    >

      <h2>

        {editingSale
          ? "Editar venta"
          : "Registrar venta"}

      </h2>


      <div className="form-group">

        <label>

          Cliente

        </label>

        <input
          name="client"
          value={form.client}
          onChange={handleChange}
          required
        />

      </div>


      <div className="form-group">

        <label>

          Paquete

        </label>

        <select
          name="package"
          value={form.package}
          onChange={handleChange}
          required
        >

          <option value="">

            Selecciona

          </option>


          {packages.map(
            (item) => (

              <option
                key={item.id}
                value={
                  item.destination
                }
              >

                {item.destination}

              </option>

            )
          )}

        </select>

      </div>


      <div className="form-group">

        <label>

          Fecha

        </label>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

      </div>


      <div className="form-group">

        <label>

          Monto de venta

        </label>

        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          required
        />

      </div>


      <div className="form-group">

        <label>

          Comisión

        </label>

        <input
          type="number"
          name="commission"
          value={form.commission}
          onChange={handleChange}
          required
        />

      </div>


      <button
        className="primary-button"
        type="submit"
      >

        {editingSale
          ? "Guardar cambios"
          : "Registrar venta"}

      </button>


      {editingSale && (

        <button
          type="button"
          className="secondary-button"
          onClick={onCancelEdit}
        >

          Cancelar

        </button>

      )}

    </form>

  );

}

export default SalesForm;