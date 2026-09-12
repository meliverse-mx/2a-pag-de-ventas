import {

  useState,
  useEffect

} from "react";

import {
  challenges
} from "../data/challenges";

import ProgressBar
  from "../components/ProgressBar";


const STORAGE_KEY =
  "kamtali_challenges";


function SellMore() {

  const [
    completed,
    setCompleted
  ] = useState([]);


  useEffect(() => {

    const saved =
      localStorage.getItem(
        STORAGE_KEY
      );


    if (saved) {

      setCompleted(
        JSON.parse(saved)
      );

    }

  }, []);


  const toggleChallenge = (
    id
  ) => {

    let updated;


    if (
      completed.includes(id)
    ) {

      updated =
        completed.filter(
          (item) =>
            item !== id
        );

    } else {

      updated = [
        ...completed,
        id
      ];

    }


    setCompleted(updated);


    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );

  };


  const progress =
    (
      completed.length /
      challenges.length
    ) * 100;


  return (

    <div>

      <div className="page-header">

        <h1>

          Vender más 🎯

        </h1>

        <p>

          Pequeñas acciones todos
          los días generan ventas.

        </p>

      </div>


      <div className="weekly-progress">

        <h2>

          Progreso semanal

        </h2>


        <ProgressBar
          progress={progress}
        />

        <p>

          {completed.length}
          {" de "}
          {challenges.length}
          {" completados"}

        </p>

      </div>


      <div className="challenge-list">

        {challenges.map(
          (challenge) => (

            <label
              key={challenge.id}
              className="challenge-item"
            >

              <input
                type="checkbox"
                checked={
                  completed.includes(
                    challenge.id
                  )
                }
                onChange={() =>
                  toggleChallenge(
                    challenge.id
                  )
                }
              />


              <div>

                <h3>

                  {challenge.title}

                </h3>

                <p>

                  {challenge.description}

                </p>

              </div>

            </label>

          )
        )}

      </div>


      <div className="strategy-card">

        <h2>

          💡 Estrategia de ventas

        </h2>

        <p>

          No empieces preguntando:

          "¿Quieres comprar un viaje?"

        </p>

        <p>

          Mejor pregunta:

          <strong>

            "Si pudieras viajar
            mañana a cualquier lugar,
            ¿a dónde irías?"

          </strong>

        </p>

      </div>

    </div>

  );

}

export default SellMore;