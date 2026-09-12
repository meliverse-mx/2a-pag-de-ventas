import {

  FileText,
  Play,
  Image

} from "lucide-react";

import {
  materials
} from "../data/materials";


function Materials() {

  const getIcon = (
    type
  ) => {

    if (
      type === "PDF"
    ) {

      return <FileText />;

    }


    if (
      type === "VIDEO"
    ) {

      return <Play />;

    }


    return <Image />;

  };


  return (

    <div>

      <div className="page-header">

        <h1>

          Material de ventas 

        </h1>

        <p>

          Todo lo que necesitas
          para compartir con
          tus clientes.

        </p>

      </div>


      <div className="materials-grid">

        {materials.map(
          (item) => (

            <article
              className="material-card"
              key={item.id}
            >

              <div className="material-icon">

                {getIcon(item.type)}

              </div>


              <span className="material-type">

                {item.type}

              </span>


              <h2>

                {item.title}

              </h2>


              <p>

                {item.description}

              </p>


              <a
                href={item.link}
                target="_blank"
              >

                Ver material →

              </a>

            </article>

          )
        )}

      </div>

    </div>

  );

}

export default Materials;