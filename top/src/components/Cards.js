import React, { useState } from 'react';
import Card from './Card';

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]); // Store liked courses

  // Get all courses if "All" is selected, else return courses for the selected category
  const getCourse = () => {
    let allCourses = [];

    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category] || []; // Handle the case where courses[category] is undefined
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourse().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
