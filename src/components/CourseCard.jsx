import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Clock, GraduationCap } from 'lucide-react';

const CourseCard = ({ course, locationId }) => {
    const navigate = useNavigate();

  return (
    <div
    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer p-6"
    onClick={() => navigate(`/location/${locationId}/course/${course.id}`)}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-3 bg-blue-100 rounded-full">
        <GraduationCap className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
    </div>
    <p className="text-gray-600 mb-4">{course.description}</p>
    <div className="flex items-center gap-2 text-gray-500">
      <Clock className="w-4 h-4" />
      <span className="text-sm">{course.duration}</span>
    </div>
  </div>
  )
}

export default CourseCard