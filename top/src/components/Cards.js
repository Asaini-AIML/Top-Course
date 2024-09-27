import React from 'react'
import Card from './Card'
const Cards = ({courses}) => {
  let allCourses = [];
  //it return you a list of all courses received from the api response
  const getCourse = () => {
    console.log(getCourse)
    Object.values(courses).forEach((courseCategory)=>{
      courseCategory.forEach((course)=>{
        allCourses.push(course)
      })
    })
    return allCourses;
  }
  return (
    <div>
      
        {getCourse().map((course)=>{
          return( <Card key={course.id} course={course}/>)
        }
      )}
    </div>
  )
}

export default Cards