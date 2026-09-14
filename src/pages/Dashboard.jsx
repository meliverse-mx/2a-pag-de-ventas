import {

  ShoppingBag,
  CheckCircle,
  DollarSign,
  Clock

} from "lucide-react";

import StatsCard
  from "../components/StatsCard";

import ProgressBar
  from "../components/ProgressBar";

import useSales
  from "../hooks/useSales";

import {
  getSalesStats
} from "../utils/salesHelpers";

import {
  formatCurrency
} from "../utils/formatters";


function Dashboard() {

  const {
    sales
  } = useSales();


  const stats =
    getSalesStats(sales);


  const weeklyGoal = 5;


  const progress =
    Math.min(
      (
        stats.totalSales /
        weeklyGoal
      ) * 100,
      100
    );


  return (

    <div>

      <section className="hero">

        <div>

          <span className="eyebrow">

             Kamtaliers

          </span>

          <h1>

            Convierte sueños
            en viajes 

          </h1>

          <p>

            Todo lo que necesitas
            para vender viajes y
            generar comisiones.

          </p>

        </div>

      </section>


      <div className="stats-grid">

        <StatsCard
          title="Ventas registradas"
          value={stats.totalSales}
          icon={<ShoppingBag />}
        />


        <StatsCard
          title="Ventas aprobadas"
          value={stats.approvedSales}
          icon={<CheckCircle />}
        />


        <StatsCard
          title="Comisión aprobada"
          value={
            formatCurrency(
              stats.approvedCommission
            )
          }
          icon={<DollarSign />}
        />


        <StatsCard
          title="Pendientes"
          value={stats.pendingSales}
          icon={<Clock />}
        />

      </div>


      <section className="dashboard-grid">

        <div className="card">

          <h2>

            🎯 Meta semanal

          </h2>

          <p>

            {stats.totalSales}
            {" / "}
            {weeklyGoal}
            {" ventas"}

          </p>


          <ProgressBar
            progress={progress}
          />

        </div>


        <div className="card highlight-card">

          <h2>

            💰 Comisión potencial

          </h2>

          <h1>

            {
              formatCurrency(
                stats.potentialCommission
              )
            }

          </h1>

          <p>

            Si todas tus ventas
            registradas son aprobadas.

          </p>

        </div>

      </section>


      <section className="challenge-card">

        <div>

          <span>

            🔥 RETO DEL DÍA

          </span>

          <h2>

            Habla con 5 personas
            sobre su próximo viaje

          </h2>

          <p>

            Pregunta:

            "Si pudieras viajar a
            cualquier lugar del mundo,
            ¿a dónde irías?"

          </p>

        </div>

      </section>

    </div>

  );

}


export default Dashboard;