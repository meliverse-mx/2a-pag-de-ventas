import {

  Download,
  PlayCircle,
  DollarSign

} from "lucide-react";

import {
  formatCurrency
} from "../utils/formatters";


function PackageCard({
  packageItem
}) {

  return (

    <article className="package-card">

      <img
        src={packageItem.image}
        alt={packageItem.destination}
      />


      <div className="package-content">

        <span className="package-duration">

          {packageItem.duration}

        </span>


        <h2>

          {packageItem.destination}

        </h2>


        <h3>

          Incluye:

        </h3>


        <ul>

          {packageItem.includes.map(
            (item) => (

              <li key={item}>

                ✓ {item}

              </li>

            )
          )}

        </ul>


        <div className="package-price">

          <span>

            Precio desde

          </span>

          <strong>

            {
              formatCurrency(
                packageItem.price
              )
            }

          </strong>

        </div>


        <div className="commission-box">

          <DollarSign />

          <div>

            <small>

              Comisión probable

            </small>

            <h3>

              {
                formatCurrency(
                  packageItem.commission
                )
              }

            </h3>

          </div>

        </div>


        <div className="package-actions">

          <a
            href={packageItem.pdf}
            target="_blank"
          >

            <Download size={18} />

            PDF

          </a>


          <a
            href={packageItem.video}
            target="_blank"
          >

            <PlayCircle size={18} />

            Video

          </a>

        </div>

      </div>

    </article>

  );

}

export default PackageCard;