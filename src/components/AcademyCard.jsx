import {
  BookOpen,
  Clock,
  CheckCircle
} from "lucide-react";

function AcademyCard({ course }) {

  return (

    <div className="academy-card">

      <div className="academy-top">

        <div className="academy-icon">

          <BookOpen size={28} />

        </div>

        <span className="level">

          {course.level}

        </span>

      </div>

      <h3>
        {course.title}
      </h3>

      <p>
        {course.description}
      </p>

      <div className="duration">

        <Clock size={17} />

        {course.duration}

      </div>

      <div className="lessons">

        <h4>
          Aprenderás:
        </h4>

        {course.lessons.map((lesson, index) => (

          <div
            className="lesson"
            key={index}
          >

            <CheckCircle size={16} />

            {lesson}

          </div>

        ))}

      </div>

      <button className="primary-button">

        Comenzar curso

      </button>

    </div>

  );
}

export default AcademyCard;