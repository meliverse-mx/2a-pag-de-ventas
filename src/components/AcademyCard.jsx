import { useState } from "react";

import {
  BookOpen,
  Clock,
  CheckCircle,
  Lock,
  PlayCircle,
  X
} from "lucide-react";

function getYoutubeEmbedUrl(url) {
  try {
    const parsedUrl = new URL(url);

    // YouTube corto: youtu.be/VIDEO_ID
    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.substring(1);

      return `https://www.youtube.com/embed/${videoId}`;
    }

    // YouTube normal: youtube.com/watch?v=VIDEO_ID
    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    // Si ya viene como embed
    return url;
  } catch {
    return url;
  }
}

function AcademyCard({
  course,
  locked,
  completed,
  completedLessons,
  onCompleteLesson
}) {
  const [selectedLesson, setSelectedLesson] =
    useState(null);

  const completedCount =
    completedLessons.length;

  const totalLessons =
    course.lessons.length;

  const percentage =
    totalLessons > 0
      ? Math.round(
          (completedCount / totalLessons) * 100
        )
      : 0;

  const handleLessonClick = (lesson) => {
    if (locked) return;

    setSelectedLesson(lesson);
  };

  const handleCompleteLesson = () => {
    if (!selectedLesson) return;

    onCompleteLesson(
      course.id,
      selectedLesson.id
    );

    setSelectedLesson(null);
  };

  return (
    <>
      <div
        className={`academy-card
          ${completed ? "completed" : ""}
          ${locked ? "locked" : ""}
        `}
      >

        {/* TOP */}
        <div className="academy-top">

          <div className="academy-icon">
            {locked ? (
              <Lock size={28} />
            ) : completed ? (
              <CheckCircle size={28} />
            ) : (
              <BookOpen size={28} />
            )}
          </div>

          <span className="level">
            {course.level}
          </span>

        </div>

        {/* TITLE */}
        <h3>
          {course.title}
        </h3>

        <p>
          {course.description}
        </p>

        {/* DURATION */}
        <div className="duration">
          <Clock size={17} />
          {course.duration}
        </div>

        {/* PROGRESO DEL CURSO */}
        {!locked && (
          <div className="course-progress">

            <div className="course-progress-info">

              <span>
                Progreso
              </span>

              <strong>
                {completedCount} / {totalLessons}
              </strong>

            </div>

            <div className="course-progress-bar">

              <div
                className="course-progress-fill"
                style={{
                  width: `${percentage}%`
                }}
              />

            </div>

            <span className="course-percentage">
              {percentage}% completado
            </span>

          </div>
        )}

        {/* LECCIONES */}
        <div className="lessons">

          <h4>
            Aprenderás:
          </h4>

          {course.lessons.map((lesson) => {

            const lessonCompleted =
              completedLessons.includes(
                lesson.id
              );

            return (
              <button
                key={lesson.id}
                className={`lesson lesson-button ${
                  lessonCompleted
                    ? "lesson-completed"
                    : ""
                }`}
                onClick={() =>
                  handleLessonClick(lesson)
                }
                disabled={locked}
              >

                <div className="lesson-left">

                  {lessonCompleted ? (
                    <CheckCircle size={17} />
                  ) : (
                    <PlayCircle size={17} />
                  )}

                  <span>
                    {lesson.title}
                  </span>

                </div>

                {lessonCompleted && (
                  <small>
                    ✓ Listo
                  </small>
                )}

              </button>
            );
          })}

        </div>

        {/* ESTADO */}
        {completed ? (

          <button
            className="completed-button"
            disabled
          >
            <CheckCircle size={18} />
            Curso completado
          </button>

        ) : locked ? (

          <button
            className="primary-button"
            disabled
          >
            <Lock size={18} />
            Curso bloqueado
          </button>

        ) : (

          <div className="course-status">

            <PlayCircle size={18} />

            <span>
              Completa las lecciones
              para obtener tu sello
            </span>

          </div>
        )}

      </div>

      {/* MODAL VIDEO */}
      {selectedLesson && (

        <div
          className="video-modal-overlay"
          onClick={() =>
            setSelectedLesson(null)
          }
        >

          <div
            className="video-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="video-modal-close"
              onClick={() =>
                setSelectedLesson(null)
              }
              aria-label="Cerrar video"
            >
              <X size={22} />
            </button>

            <div className="video-modal-header">

              <span>
                ACADEMIA KAMTALI
              </span>

              <h3>
                {selectedLesson.title}
              </h3>

            </div>

            <div className="video-container">

              <iframe
                src={getYoutubeEmbedUrl(
                  selectedLesson.videoUrl
                )}
                title={selectedLesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

            </div>

            <button
              className="complete-lesson-button"
              onClick={
                handleCompleteLesson
              }
            >
              <CheckCircle size={19} />
              Marcar lección como completada
            </button>

          </div>

        </div>
      )}

    </>
  );
}

export default AcademyCard;