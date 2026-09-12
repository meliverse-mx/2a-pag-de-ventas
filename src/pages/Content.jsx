import {
  Copy
} from "lucide-react";

import {
  content
} from "../data/content";


function Content() {

  const copyContent = (
    text
  ) => {

    navigator.clipboard
      .writeText(text);

    alert(
      "Contenido copiado"
    );

  };


  return (

    <div>

      <div className="page-header">

        <h1>

          Contenido para publicar 📲

        </h1>

        <p>

          Copia, publica y
          genera conversaciones.

        </p>

      </div>


      <div className="content-grid">

        {content.map(
          (item) => (

            <article
              className="content-card"
              key={item.id}
            >

              <span>

                {item.platform}

              </span>


              <h2>

                {item.title}

              </h2>


              <pre>

                {item.caption}

              </pre>


              <button
                onClick={() =>
                  copyContent(
                    item.caption
                  )
                }
              >

                <Copy size={18} />

                Copiar

              </button>

            </article>

          )
        )}

      </div>

    </div>

  );

}

export default Content;