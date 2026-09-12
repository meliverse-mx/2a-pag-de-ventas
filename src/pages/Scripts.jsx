import {
  Copy
} from "lucide-react";

import {
  scripts
} from "../data/scripts";


function Scripts() {

  const copyScript = (
    text
  ) => {

    navigator.clipboard
      .writeText(text);

    alert(
      "Mensaje copiado correctamente"
    );

  };


  return (

    <div>

      <div className="page-header">

        <h1>

          Scripts de venta 

        </h1>

        <p>

          Mensajes listos para
          responder clientes.

        </p>

      </div>


      <div className="scripts-grid">

        {scripts.map(
          (script) => (

            <article
              className="script-card"
              key={script.id}
            >

              <span>

                {script.category}

              </span>


              <h2>

                {script.title}

              </h2>


              <pre>

                {script.text}

              </pre>


              <button
                onClick={() =>
                  copyScript(
                    script.text
                  )
                }
              >

                <Copy size={18} />

                Copiar mensaje

              </button>

            </article>

          )
        )}

      </div>

    </div>

  );

}

export default Scripts;