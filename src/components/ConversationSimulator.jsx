import { useState } from "react";

import {
  Bot,
  MessageCircle,
  CircleHelp,
  ArrowRight,
  Target
} from "lucide-react";

import objections from "../data/objections";


function ConversationSimulator() {

  const [
    selectedObjection,
    setSelectedObjection
  ] = useState(null);


  return (

    <section className="conversation-simulator">


      <div className="simulator-header">

        <Bot size={35} />

        <div>

          <span>

            KAMTALI SALES ASSISTANT

          </span>

          <h2>

            Simulador de conversación

          </h2>

          <p>

            Selecciona lo que dice tu cliente
            y te ayudaremos a continuar
            la conversación.

          </p>

        </div>

      </div>


      <div className="simulator-options">

        {objections.map(
          (item) => (

            <button

              key={item.id}

              className={
                selectedObjection?.id === item.id
                  ? "simulator-option active"
                  : "simulator-option"
              }

              onClick={() =>
                setSelectedObjection(item)
              }
            >

              💬 {item.title}

            </button>

          )
        )}

      </div>


      {selectedObjection && (

        <div className="simulator-result">


          <div className="simulator-client">

            <MessageCircle size={20} />

            <div>

              <strong>

                Tu cliente dice:

              </strong>

              <p>

                {
                  selectedObjection.clientMessage
                }

              </p>

            </div>

          </div>


          <div className="simulator-answer">

            <Bot size={22} />

            <div>

              <strong>

                Puedes responder:

              </strong>

              <p>

                {
                  selectedObjection.response
                }

              </p>

            </div>

          </div>


          <div className="simulator-grid">


            <div>

              <CircleHelp size={20} />

              <strong>

                Pregunta:

              </strong>

              <p>

                {
                  selectedObjection.question
                }

              </p>

            </div>


            <div>

              <ArrowRight size={20} />

              <strong>

                Siguiente paso:

              </strong>

              <p>

                {
                  selectedObjection.nextStep
                }

              </p>

            </div>


            <div>

              <Target size={20} />

              <strong>

                Intenta cerrar:

              </strong>

              <p>

                {
                  selectedObjection.closing
                }

              </p>

            </div>

          </div>

        </div>

      )}

    </section>

  );

}


export default ConversationSimulator;