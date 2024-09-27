import React from 'react';
import { FcLike } from 'react-icons/fc';

const Card = ({ course }) => { // Destructure course from props
  return (
    <div>
      <div>
        <img src={course.image.url} alt={course.title} /> {/* Add alt for accessibility */}
        <div>
          <button>
            <FcLike fontSize="1.75rem" />
          </button>
        </div>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
