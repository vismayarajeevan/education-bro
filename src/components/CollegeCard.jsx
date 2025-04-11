import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export const CollegeCard = ({ college, locationId, courseId }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => navigate(`/enquiry/${college.id}?location=${locationId}&course=${courseId}`)}
    >
      <img
        src={college.image}
        alt={college.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Building2 className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-800">{college.name}</h3>
        </div>
        <p className="text-gray-600">{college.description}</p>
      </div>
    </div>
  );
};