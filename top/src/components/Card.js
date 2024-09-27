import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Card = ({ course, likedCourses, setLikedCourses }) => {
  const [isFullDescription, setIsFullDescription] = useState(false);
  function clickHandler() {
    if (Array.isArray(likedCourses)) {
      if (likedCourses.includes(course.id)) {
        setLikedCourses((prev) => prev.filter((id) => id !== course.id));
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
        toast.success('Course Liked!');
      }
    } else {
      console.error('likedCourses is not defined or is not an array');
    }
  }

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.title} className="w-full min-h-[168px] object-cover" />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[#ffffff] font-semibold text-lg leading-6 shadow-3d">{course.title}</p>
        <p
          className="text-base mt-2 text-[#ffffff] cursor-pointer"
          onClick={() => setIsFullDescription((prev) => !prev)} // Toggle description
        >
          {isFullDescription 
            ? course.description // Show full description if true
            : (course.description.length > 100 
              ? course.description.substr(0, 100) + '...' 
              : course.description) // Show truncated description if false
          }
        </p>
      </div>
    </div>
  );
};

export default Card;
