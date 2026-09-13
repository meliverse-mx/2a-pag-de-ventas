import academyCourses from "../data/academy";
import AcademyCard from "../components/AcademyCard";

import {
  GraduationCap,
  Trophy,
  TrendingUp
} from "lucide-react";

function Academy() {

  return (

    <div className="academy-page">

      <div className="academy-hero">

        <div>

          <span className="academy-label">

            🎓 ACADEMIA KAMTALI

          </span>

          <h1>
            Aprende a vender viajes
            y convierte sueños en experiencias
          </h1>

          <p>

            Aquí encontrarás capacitaciones,
            herramientas y estrategias para
            ayudarte a vender más.

          </p>

        </div>

        <GraduationCap size={90} />

      </div>


      <div className="academy-stats">

        <div>

          <BookOpenIcon />

          <strong>
            6
          </strong>

          <span>
            Cursos
          </span>

        </div>

        <div>

          <Trophy />

          <strong>
            PRO
          </strong>

          <span>
            Nivel máximo
          </span>

        </div>

        <div>

          <TrendingUp />

          <strong>
            Más ventas
          </strong>

          <span>
            Más oportunidades
          </span>

        </div>

      </div>


      <h2 className="section-title">

        Tu ruta de aprendizaje

      </h2>


      <div className="academy-grid">

        {academyCourses.map((course) => (

          <AcademyCard
            key={course.id}
            course={course}
          />

        ))}

      </div>

    </div>

  );
}


function BookOpenIcon() {

  return (

    <GraduationCap />

  );

}


export default Academy;