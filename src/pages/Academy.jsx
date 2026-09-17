import { useEffect, useState } from "react";

import academyCourses from "../data/academy";
import AcademyCard from "../components/AcademyCard";

import {
  GraduationCap,
  Trophy,
  TrendingUp,
  BookOpen,
  CheckCircle,
  Lock,
  Star,
  Award
} from "lucide-react";

const STORAGE_KEY = "kamtaliAcademyProgress";

function Academy() {
  const [progress, setProgress] = useState({});

  // Cargar progreso guardado
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);

    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch {
        setProgress({});
      }
    }
  }, []);

  // Guardar progreso
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(progress)
    );
  }, [progress]);

  // Marcar una lección como completada
  const handleCompleteLesson = (courseId, lessonId) => {
    setProgress((currentProgress) => {
      const courseProgress =
        currentProgress[courseId] || [];

      if (courseProgress.includes(lessonId)) {
        return currentProgress;
      }

      return {
        ...currentProgress,

        [courseId]: [
          ...courseProgress,
          lessonId
        ]
      };
    });
  };

  // Saber cuántas lecciones tiene completas un curso
  const getCourseProgress = (course) => {
    const completedLessons =
      progress[course.id] || [];

    return completedLessons.length;
  };

  // Saber si un curso está completamente terminado
  const isCourseCompleted = (course) => {
    const completedLessons =
      progress[course.id] || [];

    return (
      completedLessons.length ===
      course.lessons.length
    );
  };

  // Cursos completados
  const completedCourses = academyCourses.filter(
    (course) => isCourseCompleted(course)
  );

  const completedCount =
    completedCourses.length;

  const totalCourses =
    academyCourses.length;

  const overallProgress =
    Math.round(
      (completedCount / totalCourses) * 100
    );

  // Saber si el curso está desbloqueado
  const isCourseLocked = (index) => {
    if (index === 0) return false;

    const previousCourse =
      academyCourses[index - 1];

    return !isCourseCompleted(previousCourse);
  };

  // Nivel actual
  const getLevel = () => {
    if (completedCount === 0) {
      return "Aspirante Kamtali";
    }

    if (completedCount <= 2) {
      return "Viajero Kamtali";
    }

    if (completedCount <= 4) {
      return "Vendedor Kamtali";
    }

    if (completedCount === 5) {
      return "Vendedor Avanzado";
    }

    return "Vendedor Kamtali PRO";
  };

  // Siguiente curso
  const nextCourse =
    academyCourses.find(
      (course) => !isCourseCompleted(course)
    );

  return (
    <div className="academy-page">

      {/* HERO */}
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


      {/* PASAPORTE */}
      <div className="kamtali-passport">

        <div className="passport-header">

          <div className="passport-icon">
            🛂
          </div>

          <div className="passport-title">
            <span>
              PASAPORTE KAMTALI
            </span>

            <h2>
              {getLevel()}
            </h2>
          </div>

        </div>


        <div className="passport-progress">

          <div className="progress-info">

            <span>
              Tu progreso
            </span>

            <strong>
              {completedCount} / {totalCourses} cursos
            </strong>

          </div>


          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${overallProgress}%`
              }}
            />

          </div>


          <div className="progress-percentage">
            {overallProgress}% completado
          </div>

        </div>


        {/* SELLOS */}

        <div className="passport-stamps">

          {academyCourses.map((course) => {

            const completed =
              isCourseCompleted(course);

            return (
              <div
                key={course.id}
                className={`passport-stamp ${
                  completed
                    ? "active"
                    : ""
                }`}
              >

                <div className="stamp-icon">

                  {completed ? (
                    <CheckCircle size={28} />
                  ) : (
                    <Lock size={22} />
                  )}

                </div>

                <span>
                  Nivel {course.id}
                </span>

              </div>
            );
          })}

        </div>


        {/* MENSAJE */}

        <div className="passport-message">

          {nextCourse ? (
            <>
              <Star size={20} />

              <span>
                Tu siguiente destino:
                <strong>
                  {" "}
                  {nextCourse.title}
                </strong>
              </span>
            </>
          ) : (
            <>
              <Award size={22} />

              <span>
                🎉 ¡Has completado toda
                la Academia Kamtali!
              </span>
            </>
          )}

        </div>

      </div>


      {/* ESTADÍSTICAS */}

      <div className="academy-stats">

        <div>
          <BookOpen />

          <strong>
            {totalCourses}
          </strong>

          <span>
            Cursos
          </span>
        </div>


        <div>
          <Trophy />

          <strong>
            {completedCount}
          </strong>

          <span>
            Completados
          </span>
        </div>


        <div>
          <TrendingUp />

          <strong>
            {overallProgress}%
          </strong>

          <span>
            Progreso
          </span>
        </div>

      </div>


      {/* RUTA */}

      <h2 className="section-title">
        Tu ruta de aprendizaje
      </h2>

      <p className="academy-route-description">
        Completa cada lección para avanzar.
        Cuando termines todas las lecciones
        de un curso, obtendrás su sello y
        desbloquearás el siguiente nivel.
      </p>


      {/* CURSOS */}

      <div className="academy-grid">

        {academyCourses.map(
          (course, index) => {

            const locked =
              isCourseLocked(index);

            const completed =
              isCourseCompleted(course);

            const completedLessons =
              progress[course.id] || [];

            return (
              <AcademyCard
                key={course.id}
                course={course}
                locked={locked}
                completed={completed}
                completedLessons={
                  completedLessons
                }
                onCompleteLesson={
                  handleCompleteLesson
                }
              />
            );
          }
        )}

      </div>

    </div>
  );
}

export default Academy;