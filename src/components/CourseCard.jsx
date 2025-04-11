


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const CourseCard = ({ course, locationId }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => navigate(`/location/${locationId}/course/${course.id}`)}
    >
      <img
        src={course.image}
        alt={course.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
        </div>
        <p className="text-gray-600">{course.description}</p>
      </div>
    </div>
  );
};

export default CourseCard