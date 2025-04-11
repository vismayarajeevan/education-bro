import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export const CollegeCard = ({ college, locationId, courseId }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => navigate(`/enquiry/${college.id}?location=${locationId}&course=${courseId}`)}
    >
      <div className="flex items-center gap-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <Building2 className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{college.name}</h3>
          <p className="text-gray-600 mt-1">{college.description}</p>
        </div>
      </div>
    </div>
  );
};