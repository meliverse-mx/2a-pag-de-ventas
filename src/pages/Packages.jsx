import {

  packages

} from "../data/packages";

import PackageCard
  from "../components/PackageCard";


function Packages() {

  return (

    <div>

      <div className="page-header">

        <span className="eyebrow">

          CATÁLOGO

        </span>

        <h1>

          Paquetes disponibles

        </h1>

        <p>

          Comparte estos viajes,
          genera clientes y gana
          comisiones.

        </p>

      </div>


      <div className="packages-grid">

        {packages.map(
          (packageItem) => (

            <PackageCard
              key={packageItem.id}
              packageItem={packageItem}
            />

          )
        )}

      </div>

    </div>

  );

}

export default Packages;