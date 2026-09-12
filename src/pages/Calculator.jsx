import {
  useState
} from "react";

import {
  packages
} from "../data/packages";

import {
  formatCurrency
} from "../utils/formatters";


function Calculator() {

  const [
    packageId,
    setPackageId
  ] = useState(
    packages[0].id
  );


  const [
    quantity,
    setQuantity
  ] = useState(1);


  const selectedPackage =
    packages.find(
      (item) =>
        item.id ===
        Number(packageId)
    );


  const earnings =
    selectedPackage.commission *
    quantity;


  return (

    <div>

      <div className="page-header">

        <h1>

          Calculadora de ganancias 🧮

        </h1>

        <p>

          Descubre cuánto podrías
          ganar vendiendo viajes.

        </p>

      </div>


      <div className="calculator-card">

        <label>

          Selecciona un paquete

        </label>


        <select
          value={packageId}
          onChange={(e) =>
            setPackageId(
              e.target.value
            )
          }
        >

          {packages.map(
            (item) => (

              <option
                key={item.id}
                value={item.id}
              >

                {item.destination}

              </option>

            )
          )}

        </select>


        <label>

          Número de ventas

        </label>


        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) =>
            setQuantity(
              Number(e.target.value)
            )
          }
        />


        <div className="earnings-result">

          <span>

            💰 Ganancia estimada

          </span>

          <h1>

            {
              formatCurrency(
                earnings
              )
            }

          </h1>

          <p>

            {quantity} venta(s)
            de {selectedPackage.destination}

          </p>

        </div>

      </div>


      <div className="potential-grid">

        {[1, 3, 5, 10].map(
          (number) => (

            <div
              className="potential-card"
              key={number}
            >

              <span>

                {number} venta(s)

              </span>

              <h3>

                {
                  formatCurrency(
                    selectedPackage.commission *
                    number
                  )
                }

              </h3>

            </div>

          )
        )}

      </div>

    </div>

  );

}

export default Calculator;