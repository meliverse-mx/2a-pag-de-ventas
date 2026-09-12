import {

  CheckCircle,
  Clock,
  Edit,
  Trash2,
  RotateCcw

} from "lucide-react";

import {
  formatCurrency,
  formatDate
} from "../utils/formatters";


function SalesTable({

  sales,

  onEdit,

  onDelete,

  onChangeStatus

}) {

  return (

    <div className="table-wrapper">

      <table>

        <thead>

          <tr>

            <th>Cliente</th>

            <th>Paquete</th>

            <th>Fecha</th>

            <th>Monto</th>

            <th>Comisión</th>

            <th>Estado</th>

            <th>Acciones</th>

          </tr>

        </thead>


        <tbody>

          {sales.length === 0 && (

            <tr>

              <td colSpan="7">

                No hay ventas.

              </td>

            </tr>

          )}


          {sales.map(
            (sale) => (

              <tr
                key={sale.id}
              >

                <td>

                  {sale.client}

                </td>


                <td>

                  {sale.package}

                </td>


                <td>

                  {
                    formatDate(
                      sale.date
                    )
                  }

                </td>


                <td>

                  {
                    formatCurrency(
                      sale.amount
                    )
                  }

                </td>


                <td>

                  {
                    formatCurrency(
                      sale.commission
                    )
                  }

                </td>


                <td>

                  <span
                    className={`status ${
                      sale.status ===
                      "Aprobada"
                        ? "approved"
                        : "pending"
                    }`}
                  >

                    {sale.status ===
                    "Aprobada"
                      ? <CheckCircle size={15} />
                      : <Clock size={15} />
                    }

                    {sale.status}

                  </span>

                </td>


                <td>

                  <div className="table-actions">

                    <button
                      title="Editar"
                      onClick={() =>
                        onEdit(sale)
                      }
                    >

                      <Edit size={17} />

                    </button>


                    <button
                      title="Cambiar estado"
                      onClick={() =>
                        onChangeStatus(
                          sale.id,

                          sale.status ===
                          "Pendiente"
                            ? "Aprobada"
                            : "Pendiente"
                        )
                      }
                    >

                      <RotateCcw
                        size={17}
                      />

                    </button>


                    <button
                      className="delete"
                      title="Eliminar"
                      onClick={() => {

                        const confirmDelete =
                          window.confirm(
                            "¿Deseas eliminar esta venta?"
                          );


                        if (
                          confirmDelete
                        ) {

                          onDelete(
                            sale.id
                          );

                        }

                      }}
                    >

                      <Trash2
                        size={17}
                      />

                    </button>

                  </div>

                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>

  );

}

export default SalesTable;